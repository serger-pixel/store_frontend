import axios from "axios";
import { root } from "../../index.js";
import MainPage from "../components/MainPage.js";
import { useState } from "react";
import { cookieToObject, keyAvatar, keyFavorites } from "./cookieService.js";
import { getImage } from "./imageService.js";

const URL = "http://localhost:8080/users";
export const keyEx = "message";
export const emptyLogOrPas = "Пароль или логин не введены"
export const userAreNotIden = "Чтобы добавлять товары необходимо зайти в аккаунт"
export const typeReg = "Reg";
export const typeEnt = "Ent";
export const enterTitle = "Вход";
export const regTitle = "Регистрация";
export const addFavoriteMess = "Добавить в избарнное";
export const delFavoriteMess = "Удалить из избранного";
export const notImage = -1

export async function regUser(user, reg) {
    await axios.post(URL + "/reg", user, {
        headers: {
        'Content-Type': 'application/json'}
    })
    .then(function(response){
        responseToRequest(response, reg)
    })

}

export async function getUser(login, password, enter){
    await axios.get(URL + "/signin" + "/" + login + "/" + password)
    .then(function(response){
        responseToRequest(response, enter)
    }); 
}

async function responseToRequest(response, el){
    if (response.data.hasOwnProperty(keyEx)){
        el.setState({
            error: response.data.message
        })
    }
    else{
        document.cookie = keyAvatar + "=" + response.data.idImage;
        el.setState({
            data: response.data,
            error: ""
        });
    }
}

export async function addDeleteFavorite(cookie, product){
    if (!cookie["favorites"].includes(product.props.id.toString())){
        await axios.put(URL + "/" + cookie["user"]+ "/take/product/" + product.props.id)
        .then(function(response){
            let localMass = cookie["favorites"];
            localMass.push(product.props.id.toString())
            document.cookie=keyFavorites + "=" + localMass.toString();
            product.setState({
                buttonText: delFavoriteMess
            })
        })
    
    }
    else{
        await axios.delete(URL + "/"+ cookie["user"]+ "/delete/product/" + product.props.id)
        .then(function(response){
            let localMass = cookie["favorites"];
            const index = localMass.indexOf(product.props.id.toString());
            localMass.splice(index, 1);
            document.cookie=keyFavorites + "=" + localMass.toString();
            product.setState({
                buttonText: addFavoriteMess
            })
        })
    }
}

export async function setImage(imageId, profil) {
    axios.put(URL + "/" + profil.props.name + 
        "/set/product/image/" + imageId)
        .then(function(response){
            getImage(imageId, profil)
        })
}