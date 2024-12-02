import axios from "axios";
import ItemPreview from "../components/ItemPreview";
import { root } from "../..";
import ItemPage from "../components/ItemPage";
import MainPage from "../components/MainPage";



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
            console.log(response.data)
        })
    })
}

export function selectItem(key){
    root.render(<MainPage element={<ItemPage id={key}/>}/>)
}