import axios from "axios";
import ItemPreview from "../components/ItemPreview";
import { root } from "../..";
import ItemPage from "../components/ItemPage";
import MainPage from "../components/MainPage";
import { getImage } from "./imageService";
import { keyFavorites } from "./cookieService";



const URL = "http://localhost:8080/items"
export const typeMain = "main";
export const typeFavorites = "favorites"; 

export async function saveItem(item) {
    await axios.post(URL + "/post", item, {
        headers: {
        'Content-Type': 'application/json'}
    }
)
}

export async function getItem(id, item) {
    await axios.get(URL + "/get/" + id)
    .then(function(response){
        item.setState({
            props: response.data
        })
    });
    await getImage(id, item);
}

export async function getAllItem(list) {
    await axios.get(URL + "/get/all")
    .then(function(response){
        list.setState({
            items: response.data
        })
    })
}

export async function getFavorites(list, favorites) {
    let items = [];
    favorites.splice(favorites.indexOf("") , 1)
    console.log(favorites)
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

export function selectItem(key){
    root.render(<MainPage element={<ItemPage id={key}/>}/>)
}
