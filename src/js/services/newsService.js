import axios from "axios";
import NewsPreview from "../components/NewsPreview";
import { cookieToObject } from "./cookieService";
import { keyEx } from "./userService";

const URL = "http://localhost:8080/news"
/**
 * Отправка запроса для получения всех новостей из базы данных
 */
export async function getNews(list) {
    await axios.get(URL + "/get/all")
    .then(function(response){
        //Сортировать
        
        list.setState({
            news: response.data
        });
    })
}

/**
 * Отправка запроса для получения новости из базы данных
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
 */
export async function saveEvent(event, login) {
    await axios.post(URL + "/" + login +"/post", event, {
        headers: {
        'Content-Type': 'application/json'}
    });
}

/**
 * Отправка запроса для изменения или удаления новости
 */
export async function editDeleteEvent(event, content, login,editing){ 
    if (editing == true){
        await axios.put(URL + "/"+ login + "/put" + "/" + event.props.id + "/" + content)
        .then(function(response){
            
        })
    }
    else{
        await axios.delete(URL + "/"+ login + "/delete/" + event.props.id)
        .then(function(response){
            
        })
    }
}

export async function getMyNews(profile){
    let cookie = cookieToObject();
    axios.get(URL + "/" + cookie["user"] + "/get")
    .then(function(response){
        if(response.data.hasOwnProperty(keyEx)){
            profile.setState({
                error: response.data.message
            });
        }
        else{
            profile.setState({
                news: response.data,
                error: ""
            });
        }

    });
}

export function objectToNewsPrev(obj){
    return <NewsPreview
        id = {obj.id}
        head ={obj.head}
        author = {obj.author}
        content = {obj.text}
        date = {obj.time}
    />
}
