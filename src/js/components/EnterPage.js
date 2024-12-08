import React from "react";
import { useState } from 'react';
import { emptyLogOrPas, keyEx } from "../services/userService";
import { getUser } from "../services/userService";
import userComp from "./UserComponent";
import MainPage from "./MainPage";
import ListItems from "./ListItems";
import { backToMain } from "../services/mainPageService";

class EnterPage extends React.Component{
    constructor(props){
        super(props)
        this.state={data: {}, error: ""} 
    }
    render(){
        if (this.state.error == "" && 
            Object.keys(this.state.data).length !== 0){
            backToMain();
        }
        return(
        <div id="enterDiv">
            <br></br>
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
                        getUser(login, password, this)
                        if (this.state.error == "" && 
                            Object.keys(this.state.data).length !== 0){
                            document.cookie ="user=" + this.state.data.login;
                            backToMain();
                        }
                        
                    }
                    else{
                        let div = document.getElementById('error');
                        div.innerHTML = emptyLogOrPas;
                    }
                }
                }>Войти</button>
                <div id="error">{this.state.error}</div>
            </form>
        </div>
    );
    }
}

export default EnterPage;