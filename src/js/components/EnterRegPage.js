import React from "react";
import { emptyLogOrPas, enterTitle, keyEx, logErr, passwordErr, passwordRegex, regTitle, regUser, typeEnt, typeReg, usernameRegex } from "../services/userService";
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
        // <div>
        //     <Header/>
        //     <div className="enterRegTitle">{this.title}</div>
        //     <input className="login" id="login"/>
        //     <input className="password" type="password" id="password"/>
        //     <div className="textToLogin">Логин</div>
        //     <div className="textToPass">Пароль</div>
        //     <div className="btn" onClick={
        //         ()=>{
        //             {
        //                 let login = document.getElementById("login").value;
        //                 let password = document.getElementById("password").value;
        //                 let div = document.getElementById('regLogErr')
        //                 if (login !=="" && password !== "")
        //                 {
        //                     if(this.props.type == typeEnt){
        //                         getUser(login, password, this)
        //                     }
        //                     else{
        //                         if (usernameRegex.test(login) &&
        //                         passwordRegex.test(password))
        //                         {
        //                             regUser({
        //                             login: login,
        //                             password: password
        //                         }, this)
        //                         }
        //                         else{
        //                             if (!usernameRegex.test(login)){
        //                                 div.innerHTML = logErr;
        //                             }
        //                             else{
        //                                 div.innerHTML = passwordErr;
        //                             }
        //                         }
        //                     }
                            
        //                 }
        //                 else{
        //                     if (login === "" || password === ""){
        //                         div.innerHTML = emptyLogOrPas;
        //                     }
        //                 }
        //             } 
        //         }
        //     }>{this.title}</div>
        //     <div className="regLogErr" id="regLogErr">{this.state.error}</div>
        // </div>
        <div>
            <Header/>
            <form className="row" id="validationForm" novalidate>
                <div className="col">
                    <div>
                        <label for="validationLogin" class="form-label">Логин</label>
                        <input type="text" className="form-control" id="validationLogin" required/>
                        <div className="invalid-feedback" id="loginFeedback">Неправильно</div>
                    </div>
                    <label for="validationPassword" class="form-label">Пароль</label>
                    <input type="password" className="form-control" id="validationPassword" required/>
                    <div className="invalid-feedback" id="passwordFeedback"></div>
                    <div className="invalid-feedback" id="mainFeedback">{this.state.error}</div>
                    <button class="btn btn-primary" type="submit" onClick={
                        ()=>{
                            let login = document.getElementById("validationLogin").value;
                            let password = document.getElementById("validationPassword").value;
                            let passwordFeedback = document.getElementById("passwordFeedback");
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
                                        }
                                        else{
                                            passwordFeedback.innerHTML = passwordErr;
                                            passwordFeedback.show();
                                        }
                                    }
                                }
                                
                            }
                            else{
                                if (login === "" || password === ""){
                                    passwordFeedback.innerHTML = emptyLogOrPas;
                                }
                            }  
                    }
                    }>{this.title}</button>
                </div>
            </form>
        </div>
        
    );
    }
}

export default EnterRegPage;