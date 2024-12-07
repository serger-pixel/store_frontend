import axios from "axios";
import { root } from "../../index.js";
import MainPage from "../components/MainPage.js";
import { useState } from "react";

const URL = "http://localhost:8080/users";
export const _NotFoundUserMess = "Такого пользователя не существует";
export const _NotIdentifiedUserMess = "Неправильный пароль";
export const _UserAreRegMess = "Пользователь уже зарегестрирован";

export async function regUser(user) {
    await axios.post(URL + "/reg", user, {
        headers: {
        'Content-Type': 'application/json'}
    }
)
}

export async function getUser(login, password, enter){ //getUser if response.status
    await axios.get(URL + "/signin" + "/" + login + "/" + password).then(function(response){
        console.log(response)
        switch(response.data.message){
            case "2":
                enter.setState({
                    data: response.data
                });
                break
            case _NotFoundUserMess:
                enter.setState({
                    operMessage: response.message
                })
                break
            default:
                enter.setState({
                    operMessage: "Неизвестная ошибка"
                })
                break
        }
    });
}