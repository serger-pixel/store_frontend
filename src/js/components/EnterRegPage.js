import React from "react";
import { emptyLogOrPas, enterTitle, keyEx, logErr, passwordErr, passwordRegex, regTitle, regUser, titleEnt, titleReg, typeEnt, typeReg, usernameRegex } from "../services/userService";
import { getUser } from "../services/userService";
import { backToMain } from "../services/mainPageService";
import { cookieToObject, keyAvatar, keyFavorites, keyUser } from "../services/cookieService";
import Header from "./Header";
import "../../css/regLog.css";
import "../../css/header.css"

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
    }

    /**
     * Отображение страницы
     * @return страницу входа или регистрации в зависимости от типа
     */
    render(){
        console.log(this.state.data)
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
            <form className="row" id="validationForm" novalidate>
                <h1 className="display-5" id="title">{this.props.title}</h1>
                <label for="validationLogin" class="form-label">Логин</label>
                <input type="text" className="form-control" id="validationLogin"/>
                <label for="validationPassword" class="form-label">Пароль</label>
                <input type="password" className="form-control" id="validationPassword" required/>
                    <button class="btn btn-primary" type="button" id="enterButton" onClick={
                        ()=>{
                            let login = document.getElementById("validationLogin").value;
                            let password = document.getElementById("validationPassword").value;
                            let validationError = document.getElementById("validationError");
                            if (login !=="" && password !== "")
                            {
                                if(this.props.type == typeEnt){
                                    getUser(login, password, this)
                                }
                                else{
                                    if (usernameRegex.test(login) &&
                                    passwordRegex.test(password))
                                    {
                                        regUser({
                                        login: login,
                                        password: password
                                    }, this)
                                    }
                                    else{
                                        if (!usernameRegex.test(login)){
                                            validationError.innerHTML = logErr
                                        }
                                        else{
                                            validationError.innerHTML = passwordErr
                                        }
                                    }
                                }
                                
                            }
                            else{
                                if (login === "" || password === ""){
                                    validationError.innerHTML = emptyLogOrPas;
                                }
                            }  
                    }
                    }>{this.props.btnText}</button>
                    <div id="validationError">{this.state.error}</div>
            </form>
        </div>
        
    );
    }
}

export default EnterRegPage;