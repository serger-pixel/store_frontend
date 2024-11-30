import axios from "axios";

const URL = "http://localhost:8080/images/post"

export async function saveImage(image) {
    return await axios.post(URL, image, {
        headers: {
        'Content-Type': 'multipart/form-data'}
    }
)
}

// export async function getItem(id) {
//     return await axios.get('${URL}'/'${id}')
// }