import React from "react";
import { useState } from 'react';
import { _NotFoundUserMess, regUser } from "../services/userService";
import { getUser } from "../services/userService";
import userComp from "./UserComponent";
import MainPage from "./MainPage";
import ListItems from "./ListItems";
import { backToMain } from "../services/mainPageService";

class EnterPage extends React.Component{
    constructor(props){
        super(props)
        this.state={data: {}, operMessage: ""} 
    }
    render()
    {
        switch(this.state.operStatus){
            case "2":
                return(<MainPage element={<ListItems/>}/>);
            case _NotFoundUserMess:
                alert(this.state.operMessage);
                break
            default:
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
                            getUser(login, password, this)
                        }
                        }>Войти</button>
                    </form>
                </div>
            );
        }
    }
}

export default EnterPage