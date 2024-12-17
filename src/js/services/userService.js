import axios from "axios";
import { cookieToObject, keyAvatar, keyFavorites } from "./cookieService.js";
import { getImage } from "./imageService.js";
import { getFavorites, titleFavorites, typeFavorites } from "./productService.js";

/**
 * Путь для запроса
 */
export const URL = "http://localhost:8080/users";

/**
 * Регулярное выражение для проверки логина
 */
export const usernameRegex = /^[A-Za-z]{3,20}$/;

/**
 * Регулярное выражение для проверки пароля
 */
export const passwordRegex = /^[A-Za-z0-9]{6,20}$/;

/**
 * Сообщение о несоответствии пароля требованиям
 */
export const passwordErr = "Пароль должен состоять из букв и цифр, длина 6-20 символов";

/**
 * Сообщение о несоответствии логина требованиям
 */
export const logErr = "Логин должен состоять из букв, длина 3-20 символов";

/**
 * Заголовок входа в аккаунт
 */
export const titleEnt = "Вход в аккаунт";

/**
 * Заговок регистрации аккаунта
 */
export const titleReg = "Регистрация аккаунта";

/**
 * Параметр message для поиска соответствующего значения в response.data
 */
export const keyEx = "message";

/**
 * Список ролей пользователя
 */
export const standartRoles = ["Moderator", "User", "Admin"];

/**
 * Список статусов пользователя
 */
export const standartStatuses = ["unbanned", "banned"]

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
export const notImage = 56

/**
 * Отправка запроса добавления пользователя в базу данных
 * @param user данные о пользователя
 * @param reg компонент регистрации или добавления пользователя
 * @param type тип компонента
 */
export async function regUser(user, reg, type) {
    await axios.post(URL + "/reg", user, {
        headers: {
        'Content-Type': 'application/json'}
    })
    .then(function(response){
        responseToRequest(response, reg, type)
    })

}


/**
 * Отправка запроса получения пользователя из базы данных
 * @param login логин пользователя
 * @param password пароль пользователя
 * @param enter компонент регистрации
 */
export async function getUser(login, password, enter){
    await axios.get(URL + "/signin" + "/" + login + "/" + password)
    .then(function(response){
        responseToRequest(response, enter)
    }); 
}

/**
 * Изменение состояния в соответствии с запросом
 * @param response ответ на запрос
 * @param  el компонент
 * @param  type тип компонента
 */
async function responseToRequest(response, el, type=typeEnt){
    if (response.data.hasOwnProperty(keyEx)){
        el.setState({
            error: response.data.message
        })
    }
    else{
        if (type === typeEnt || type === typeReg){
            document.cookie = keyAvatar + "=" + response.data.idImage;
        }
        el.setState({
            data: response.data,
            error: ""
        });
    }
}

/**
 *  Отправка запроса для добавления или удаления товара из списка избранного
 * @param cookie куки
 * @param product компонент товара
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
            console.log(product.props.name);
            let localMass = cookie["favorites"].slice();
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
                console.log(cookieToObject()["favorites"]);
                product.props.list.setState({
                    items: []
                })
                getFavorites(product.props.list, cookieToObject()["favorites"]);
                getFavorites(product.props.list, cookieToObject()["favorites"]);
            }
        })
    }
}

/**
 * Отправка запроса для закрепления изображения (аватара) за пользователем
 * @param imageId идентификатор изображения
 * @param profil компонет профиля
 */
export async function setImage(imageId, profil) {
    axios.put(URL + "/" + profil.props.name + 
        "/set/product/image/" + imageId)
        .then(function(response){
            getImage(imageId, profil)
        })
}
