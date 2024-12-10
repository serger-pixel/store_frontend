import React from "react";
import { useState } from 'react';
import { emptyLogOrPas, enterTitle, keyEx, regTitle, regUser, typeEnt, typeReg } from "../services/userService";
import { getUser } from "../services/userService";
import MainPage from "./MainPage";
import ListItems from "./ListItems";
import { backToMain } from "../services/mainPageService";
import { cookieToObject, keyAvatar, keyFavorites, keyUser } from "../services/cookieService";

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
        <div id="enterDiv">
            <br></br>
            <label for="entForm">{this.title}</label>
            <form id="entForm" method="post">
                <input type="text" id="login"/>
                <label for="login">Логин</label><br/>
                <br/><br/>
                <input type="text" id="password"/>
                <label for="password">Пароль</label><br/>
                <button type="button" onClick={()=>
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
                        let div = document.getElementById('error');
                        div.innerHTML = emptyLogOrPas;
                    }
                }
                }>{this.title}</button>
                <div id="error">{this.state.error}</div>
                <div id="clockPlace"></div>
                <div id="counterPlace"></div>
            </form>
        </div>
    );
    }
}

export default EnterRegPage;