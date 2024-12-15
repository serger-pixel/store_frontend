import axios from "axios";
import ProductPreview from "../components/ProductPreview";
import { root } from "../..";
import ItemPage from "../components/ItemPage";
import MainPage from "../components/MainPage";
import { getImage } from "./imageService";
import { cookieToObject, keyFavorites } from "./cookieService";
import Profile from "../components/Profile";
import ListProducts from "../components/ListProducts";


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

export const titleMain = "Товары";

export const titleFavorites = "Список избранного";

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
    let cookie = cookieToObject();
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

export function ObjectToProdPrev(obj, list, type){
    return <ProductPreview 
        name={obj.name}
        price={obj.price}
        valute={obj.valute}
        id={obj.id}
        image={obj.idImage}
        list = {list}
        type = {type}
    />
}
