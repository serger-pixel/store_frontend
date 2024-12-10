import axios from "axios";
import { root } from "../..";
import ListItems from "../components/ListItems";
import MainPage from "../components/MainPage";
import { typeMain } from "./itemService";

/**
 * Путь для запроса
 */
const URL = "http://localhost:8080/get/"

/**
 * Возвращение на главную страницу
 */
export function backToMain(){
    root.render(<MainPage element={<ListItems type={typeMain}/>}/>)
}

/**
 * 
 */
export async function getTimeCnt(){
    let time;
    let cnt;
    await axios.get(URL+ "time")
    .then(function(response){
        time = response.data;
        console.log(response)
    })
    await axios.get(URL + "cnt")
    .then(function(response){
        cnt = response.data;
    })
    document.getElementById("clockPlace").innerHTML = time;
    document.getElementById("counterPlace").innerHTML = cnt;
} 