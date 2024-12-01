import axios from "axios";


const URL = "http://localhost:8080/items"

export async function saveItem(item) {
    return await axios.post(URL + "/post", item, {
        headers: {
        'Content-Type': 'application/json'}
    }
)
}

export async function getItem(id, setState, setPrice) {
    await axios.get(URL + "/get/" + id).then(function(response){
        console.log(response.data);
        setState(response.data.name);
        setPrice(response.data.price);
    })
}

export async function getAllItem(setState) {
    await axios.get(URL + "/get/all").then(function(response){
        console.log(response.data)
        setState({items: response.data});
    })
}

export function selectItem(setItem, setMain, setProp, prop){
    setItem(true);
    setMain(false);
    setProp(prop);
}