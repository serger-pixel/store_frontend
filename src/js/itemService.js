import axios from "axios";

const URL = "http://localhost:8080/post"

export async function saveItem(item) {
    return await axios.post(URL, item, {
        headers: {
        'Content-Type': 'application/json'}
    }
)
}

export async function getItem(id) {
    return await axios.get('${URL}'/'${id}')
}