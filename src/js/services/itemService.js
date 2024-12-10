import axios from "axios";
import ItemPreview from "../components/ItemPreview";
import { root } from "../..";
import ItemPage from "../components/ItemPage";
import MainPage from "../components/MainPage";
import { getImage } from "./imageService";
import { keyFavorites } from "./cookieService";


/**
 * Путь для запроса
 */
const URL = "http://localhost:8080/items"

/**
 * Тип списка товаров для главной страницы
 */
export const typeMain = "main";

/**
 * Тип списка избранных товаров для страницы пользователя
 */
export const typeFavorites = "favorites"; 

/**
 * Отправка запроса для сохранения товара в базе данных
 */
export async function saveItem(item) {
    await axios.post(URL + "/post", item, {
        headers: {
        'Content-Type': 'application/json'}
    }
)
}

/**
 * Отправка запроса для получения товара из базы данных
 */
export async function getItem(id, item) {
    await axios.get(URL + "/get/" + id)
    .then(function(response){
        item.setState({
            props: response.data
        })
    });
    await getImage(id, item);
}

/**
 * Отправка запроса для получения всех товаров из базы данных
 */
export async function getAllItem(list) {
    await axios.get(URL + "/get/all")
    .then(function(response){
        list.setState({
            items: response.data
        })
    })
}

/**
 * Отправка запроса для получения списка избранных товаров
 */
export async function getFavorites(list, favorites) {
    let items = [];
    let ind = favorites.indexOf("");
    if (ind !== -1){
        favorites.splice(favorites.indexOf("") , 1)
        console.log(favorites)
    }
    for (let i = 0; i < favorites.length; i++){
        await axios.get(URL+ "/get/" + favorites[i])
        .then(function(response){
            items.push(response.data)
        })
}
    list.setState({
        items: items
    })
}

/**
 * Отображение на главной странице информации о товаре
 */
export function selectItem(key){
    root.render(<MainPage element={<ItemPage id={key}/>}/>)
}
