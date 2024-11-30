import axios from "axios";
import { response } from "express";

const URL = "http://localhost:8080/items"

export async function saveItem(item) {
    return await axios.post(URL + "/post", item, {
        headers: {
        'Content-Type': 'application/json'}
    }
)
}

export async function getItem(id) {
    const promise = await axios.get(URL + "/get/" + id);
    const data = promise.then((response) => response.data);
    return data;
}