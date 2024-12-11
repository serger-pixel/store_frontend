import React from "react";
import { emptyLogOrPas, enterTitle, keyEx, regTitle, regUser, typeEnt, typeReg } from "../services/userService";
import { getUser } from "../services/userService";
import { backToMain } from "../services/mainPageService";
import { cookieToObject, keyAvatar, keyFavorites, keyUser } from "../services/cookieService";
import Header from "./Header";
import "../../css/regLog.css"

/**
 * Класс страницы входа/регистрации
 */
class EnterRegPage extends React.Component{

    /**
     * Конструктор
     * @param
     * props - тип страницы(type)
     */
    constructor(props){
        super(props)
        this.state={data: {}, error: ""}
        if (props.type === typeEnt){
            this.title = enterTitle
        }
        else{
            this.title = regTitle;
        }
    }

    /**
     * Отображение страницы
     * @return страницу входа или регистрации в зависимости от типа
     */
    render(){
        if (this.state.error === "" && 
            Object.keys(this.state.data).length !== 0 &&
            (this.props.type === typeEnt ||
            this.props.type === typeReg)){
            document.cookie= keyUser + "=" + this.state.data.login;
            document.cookie= keyFavorites + "=" + this.state.data.favorites;
            document.cookie = keyAvatar + "=" + this.state.data.idImage;
            backToMain();
        }
        return(
        <div>
            <Header/>
            <div className="enterRegTitle">{this.title}</div>
            <input className="login" id="login"/>
            <input className="password" type="password" id="password"/>
            <div className="textToLogin">Логин</div>
            <div className="textToPass">Пароль</div>
            <div className="btn" onClick={
                ()=>{
                    {
                        let login = document.getElementById("login").value;
                        let password = document.getElementById("password").value;
                        if (login !=="" && password !== ""){
                            if(this.props.type == typeEnt){
                                getUser(login, password, this)
                            }
                            else{
                                regUser({
                                    login: login,
                                    password: password
                                }, this)
                            }
                            
                        }
                        else{
                            console.log(emptyLogOrPas)
                            let div = document.getElementById('regLogErr');
                            div.innerHTML = emptyLogOrPas;
                        }
                    } 
                }
            }>{this.title}</div>
            <div className="regLogErr" id="regLogErr">{this.state.error}</div>
        </div>
    );
    }
}

export default EnterRegPage;