import axios from "axios";

const URL = "http://localhost:8080/images/"

export async function saveImage(image) {
    await axios.post(URL + "post", image, {
        headers: {
        'Content-Type': 'multipart/form-data'}
    }
)
}

export async function getImage(id, el) {
    await axios.get(URL+"get/"+id).then( function(response){
        el.setState({
            image: 'data:'+response.data.fileType+';base64,'+ response.data.bytes 
        })
    })
}