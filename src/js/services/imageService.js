import axios from "axios";
import { setImage } from "./userService";
import { cookieToObject, keyAvatar } from "./cookieService";

/**
 * Путь для запроса
 */
const URL = "http://localhost:8080/images/"

/**
 * Типы файлов
 */
export const types =["jpeg", "png", "jpg"]

/**
 * Отправка запроса для сохранения изображения в базе данных
 * @param image изображение
 * @param profil компонент профиля
 */
export async function saveImage(image, profil, type = "None") {
    await axios.post(URL + "post", image, {
        headers: {
        'Content-Type': 'multipart/form-data'}
    })
    .then(function(response){
        setImage(response.data.id, profil, type);
        if (type === "None"){
            document.cookie = keyAvatar + "=" + response.data.id;
        }
    })
}

/**
 * Отправка запроса для получения изображения из базы данных
 * @param id идентификатор изображения
 * @param el компонент
 */
export async function getImage(id, el) {
    await axios.get(URL+"get/"+id).then( function(response){
        el.setState({
            image: 'data:'+response.data.fileType+';base64,'+ response.data.bytes 
        })
    })
}