
import React from "react";
import { useState } from 'react';
import { regUser } from "../services/userService";
class EnterPage extends React.Component{
    constructor(props){
        super(props)
        this.state={data: {}}
    }
    render()
    {return(
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
                    
                }
                }>Войти</button>
            </form>
        </div>
    );}
}

export default EnterPage