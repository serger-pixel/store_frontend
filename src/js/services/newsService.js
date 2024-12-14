import axios from "axios";
import NewsPreview from "../components/NewsPreview";

const URL = "http://localhost:8080/news"
/**
 * Отправка запроса для получения всех новостей из базы данных
 */
export async function getNews(list) {
    await axios.get(URL + "/get/all_news")
    .then(function(response){
        list.setState({
            news: response.data
        });
    })
}

/**
 * Отправка запроса для получения новости из базы данных
 */
export async function getEvent(id, item){
    await axios.get(URL + "/get/" + id)
    .then(function(response){
        item.setState({
            props: response.data
        })
    });
}

/**
 * Отправка запроса для сохранения новости в базе данных
 */
export async function saveEvent(event) {
    await axios.post(URL + "/post", event, {
        headers: {
        'Content-Type': 'application/json'}
    });
}

/**
 * Отправка запроса для изменения или удаления новости
 */
export async function editDeleteEvent(event, editing){ //event уже отредактированный
    if (editing == true){
        await axios.put(URL + "/put" + "/" + event.props.id , event)
        .then(function(response){
            
        })
    }
    else{
        await axios.delete(URL + "/delete/" + event.props.id)
        .then(function(response){
            
        })
    }
}

export function objectToNewsPrev(obj){
    return <NewsPreview
        head ={obj.head}
        author = {obj.author}
        content = {obj.content}
        date = {obj.date}
    />
}