import axios from "axios";
import { root } from "../../index.js";
import MainPage from "../components/MainPage.js";
import { useState } from "react";

const URL = "http://localhost:8080/users";
export const keyEx = "message";
export const emptyLogOrPas = "Пароль или логин не введены"

export async function regUser(user) {
    await axios.post(URL + "/reg", user, {
        headers: {
        'Content-Type': 'application/json'}
    }
)
}

export async function getUser(login, password, enter){
    await axios.get(URL + "/signin" + "/" + login + "/" + password).then(function(response){
        console.log(response)
        if (response.data.hasOwnProperty(keyEx)){
            enter.setState({
                error: response.data.message
            })
        }
        else{
            enter.setState({
                data: response.data,
                error: ""
            });
        }
    }); 
}