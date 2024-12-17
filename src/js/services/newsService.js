import axios from "axios";
import NewsPreview from "../components/NewsPreview";
import { cookieToObject } from "./cookieService";
import { keyEx } from "./userService";
import NewsTable from "../components/NewsTable";
import { root } from "../..";
import bootstrap from "../../../node_modules/bootstrap/dist/js/bootstrap.js";

/**
 * Путь для запроса
 */
const URL = "http://localhost:8080/news"

/**
 * Отправка запроса для получения всех новостей из базы данных
 * @param list компонент списка новостей
 */
export async function getNews(list) {
    await axios.get(URL + "/get/all")
    .then(function(response){
        response.data.sort((a, b) => a["id"] - b["id"]);
        list.setState({
            news: response.data
        });
    })
}

/**
 * Отправка запроса для получения новости из базы данных
 * @param id идентификатор новости
 * @param login логин пользователя
 * @param item компонент
 */
export async function getEvent(id, login, item){
    await axios.get(URL + "/" + login + "/get/" + id)
    .then(function(response){
        item.setState({
            props: response.data
        })
    });
}

/**
 * Отправка запроса для сохранения новости в базе данных
 * @param event новость
 * @param login логин пользователя
 */
export async function saveEvent(event, login) {
    await axios.post(URL + "/" + login +"/post", event, {
        headers: {
        'Content-Type': 'application/json'}
    });
}

/**
 * Отправка запроса для изменения новости
 * @param idEvent идентификатор новости
 * @param content новое содержание
 * @param login логин пользователя
 */
export async function editEvent(idEvent, content, login){ 
        await axios.put(URL + "/"+ login + "/put" + "/" + idEvent + "/" + content)
        .then(function(response){
            
        });  
}

/**
 * Отправка запроса для удаления новости
 * @param login логин пользователя
 * @param idEvent идентификатор новости
 */
export async function deleteEvent(login, idEvent){
    await axios.delete(URL + "/"+ login + "/delete/" + idEvent)
    .then(function(response){
        
    });
}

/**
 * Отправка запроса для получения новостей модератора
 * @param profile компонент профиля
 * @param id идентификатор Modal
 */
export async function getMyNews(profile, id="None"){
    let cookie = cookieToObject();
    await axios.get(URL + "/" + cookie["user"] + "/get")
    .then(function(response){
        if(response.data.hasOwnProperty(keyEx)){
            profile.setState({
                error: response.data.message
            });
            if (id != "None"){
                let modal = document.getElementById(id);
                modal = new bootstrap.Modal(modal, {
                    backdrop: true,
                    keyboard: true,
                    focus: true
                });
                let modalText = document.getElementById(id + "text");
                modalText.innerHTML = "Недостаточно прав";
                modal.show();}
        }
        else{
            response.data.sort((a, b) => a["id"] - b["id"]);
            profile.setState({
                news: response.data,
                error: ""
            });
            root.render(<NewsTable news = {profile.state.news}/>)
        }
        console.log(id);
    });
}

/**
 * Создание компонента новости с данными объекта
 * @param obj объект
 * @returns компонент новости
 */
export function objectToNewsPrev(obj){
    return <NewsPreview
        id = {obj.id}
        head ={obj.head}
        author = {obj.author}
        content = {obj.text}
        date = {obj.time}
    />
}
