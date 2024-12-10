import axios from "axios";
import { setImage } from "./userService";
import { cookieToObject } from "./cookieService";

const URL = "http://localhost:8080/images/"

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

export async function getImage(id, el) {
    await axios.get(URL+"get/"+id).then( function(response){
        el.setState({
            image: 'data:'+response.data.fileType+';base64,'+ response.data.bytes 
        })
    })
}