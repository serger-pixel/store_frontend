import axios from "axios";
import ItemPreview from "../components/ItemPreview";


const URL = "http://localhost:8080/items"

export async function saveItem(item) {
    return await axios.post(URL + "/post", item, {
        headers: {
        'Content-Type': 'application/json'}
    }
)
}

export async function getItem(id, item) {
    await axios.get(URL + "/get/" + id).then(function(response){
        item.setState({
            props: response.data
        }, ()=>{
        })
    })
}

export async function getAllItem(list) {
    await axios.get(URL + "/get/all").then(function(response){
        list.setState({
            items: response.data
        }, ()=>{
        })
    })
}

export function selectItem(item){
    item.setState({
        rend: true
    }, ()=>{
        console.log(1);
    })
}