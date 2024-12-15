import axios from "axios";
import { root } from "../../index.js";
import MainPage from "../components/MainPage.js";
import { useState } from "react";
import { cookieToObject, keyAvatar, keyFavorites } from "./cookieService.js";
import { getImage } from "./imageService.js";
import Profile from "../components/Profile.js";
import ListProducts from "../components/ListProducts.js";
import { titleFavorites, typeFavorites } from "./productService.js";

/**
 * Путь для запроса
 */
const URL = "http://localhost:8080/users";

export const usernameRegex = /^[A-Za-z]{3,20}$/;

export const passwordRegex = /^[A-Za-z0-9]{6,20}$/;

export const passwordErr = "Пароль должен состоять из букв и цифр, длина 6-20 символов";

export const logErr = "Логин должен состоять из букв, длина 3-20 символов";

export const titleEnt = "Вход в аккаунт";

export const titleReg = "Регистрация аккаунта";
/**
 * Параметр message для поиска соответствующего значения в response.data
 */
export const keyEx = "message";

/**
 * Сообщение об ошибке при регестрации или входе
 */
export const emptyLogOrPas = "Пароль или логин не введены"

/**
 * Сообщение об ошибке при попытке не авторизированного пользователя добавить товар в избранное
 */
export const userAreNotIden = "Чтобы добавлять товары необходимо зайти в аккаунт"

/**
 * Тип страницы регистрации
 */
export const typeReg = "Reg";

/**
 * Тип страницы входа
 */
export const typeEnt = "Ent";

/**
 * Заголовок страницы входа
 */
export const enterTitle = "Вход";

/**
 * Заголовок страницы регистрации
 */
export const regTitle = "Регистрация";

/**
 * Надпись на кнопке добавления товара в избранное
 */
export const addFavoriteMess = "Добавить в избранное";

/**
 * Надпись на кнопке удаления товара из избранного
 */
export const delFavoriteMess = "Удалить из избранного";

/**
 * Флаг отсутствия изображения
 */
export const notImage = 17

/**
 * Отправка запроса добавления пользователя в базу данных
 */
export async function regUser(user, reg) {
    await axios.post(URL + "/reg", user, {
        headers: {
        'Content-Type': 'application/json'}
    })
    .then(function(response){
        responseToRequest(response, reg)
    })

}

/**
 * Отправка запроса получения пользователя из базы данных
 */
export async function getUser(login, password, enter){
    await axios.get(URL + "/signin" + "/" + login + "/" + password)
    .then(function(response){
        responseToRequest(response, enter)
    }); 
}

/**
 * Изменение состояния в соответствии с запросом
 */
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

/**
 * Отправка запроса для добавления или удаления товара из списка избранного
 */
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
            if (localMass.indexOf("") !== -1){
                localMass.splice(localMass.indexOf(""), 1)
            }
            const index = localMass.indexOf(product.props.id.toString());
            localMass.splice(index, 1);
            document.cookie=keyFavorites + "=" + localMass.toString();
            product.setState({
                buttonText: addFavoriteMess
            })
            if (product.props.type === typeFavorites){
                let localItems = []
                let items = product.props.list.state.items;
                for(let i = 0; i < items.length; i++){
                    if (items[i].id !== product.props.id){
                        localItems.push(items[i])
                    }
                }
                product.props.list.setState({
                    items: localItems
                }) 
            }
        })
    }
}

/**
 * Отправка запроса для закрепления изображения (аватара) за пользователем
 */
export async function setImage(imageId, profil) {
    axios.put(URL + "/" + profil.props.name + 
        "/set/product/image/" + imageId)
        .then(function(response){
            getImage(imageId, profil)
        })
}
