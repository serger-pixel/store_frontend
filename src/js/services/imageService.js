import axios from "axios";
import { setImage } from "./userService";
import { cookieToObject } from "./cookieService";

/**
 * Путь для запроса
 */
const URL = "http://localhost:8080/images/"

export const types =["jpeg", "png", "jpg"]

/**
 * Отправка запроса для сохранения изображения в базе данных
 */
export async function saveImage(image, profil) {
    await axios.post(URL + "post", image, {
        headers: {
        'Content-Type': 'multipart/form-data'}
    })
    .then(function(response){
        setImage(response.data.id, profil);
        document.cookie = response.data.id;
    })
}

/**
 * Отправка запроса для получения изображения из базы данных
 */
export async function getImage(id, el) {
    await axios.get(URL+"get/"+id).then( function(response){
        el.setState({
            image: 'data:'+response.data.fileType+';base64,'+ response.data.bytes 
        })
    })
}