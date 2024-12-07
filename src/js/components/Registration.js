import React from "react";
import { useState } from 'react';
import { regUser } from "../services/userService";

function Registration(){
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    return( 
        <div>
            <label for="login">Введите логин</label>
            <input type="text" id="login"/>
            <label for="password">Введите пароль</label>
            <input type="text" id="password"/>
            <button type="button" onClick={()=>{
                setLogin(document.getElementById("login").value);
                setPassword(document.getElementById("password").value);
                regUser({
                    password: password,
                    login: login
                })
            }}>Регестрация</button>
        </div>);
    }

export default Registration