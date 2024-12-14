import axios from "axios";
import { root } from "../..";
import ListProducts from "../components/ListProducts.js";
import MainPage from "../components/MainPage";
import { typeMain } from "./productService";

/**
 * Путь для запроса
 */
const URL = "http://localhost:8080/get/"

/**
 * Возвращение на главную страницу
 */
export function backToMain(){
    root.render(<MainPage element={<ListProducts type={typeMain}/>}/>)
}

/**
 * Отправка запроса для получения даты и времени и счётчика посещений
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
    document.getElementById("timeNav").innerHTML = "Время:" + time;
    document.getElementById("cntNav").innerHTML = "Кол-во посетителей: " + cnt;
} 