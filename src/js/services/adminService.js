import axios from "axios";
import { cookieToObject } from "./cookieService";
import { keyEx, URL } from "./userService";
import UserRow from "../components/UserRow";

export const roleEdit = "roleEdit";

export const statusEdit = "statusEdit"


export async function getAllUsers(el){
    let cookie = cookieToObject();
    await axios.get(URL + "/" + cookie["user"]+ "/get/all")
    .then(function(response){   
        console.log(response.data)
        if (response.data.hasOwnProperty(keyEx)){
            el.setState({
                error: response.data.message
            })
        }
        else{
            el.setState({
                users: response.data,
                error: ""
            })
        }
    })
}

export function ObjectToUserRow(obj, table){
    return <UserRow 
        role={obj.role}
        login={obj.login}
        id={obj.id}
        status = {obj.status}
        table = {table}
    />
}

export async function deleteUser(el, id){
    let cookie = cookieToObject();
    await axios.delete(URL + "/" + cookie["user"]+ "/delete/" + id)
    .then(function(response){
        if (response.data.hasOwnProperty(keyEx)){
            el.setState({
                error: response.data.message
            })
        }
    })
}

export async function setUserStatus(el, id, status) {
    let cookie = cookieToObject();
    await axios.put(URL + "/"+cookie["user"]+ "/setuserstatus/" +
        id+ "/" + status).then(function(response){
            if (response.data.hasOwnProperty(keyEx)){
                el.setState({
                    error: response.data.message
                })
            }
        })
}

export async function setRole(el, id, role) {
    let cookie = cookieToObject();
    await axios.put(URL + "/"+cookie["user"]+ "/editrole/" +
        id+ "/" + role).then(function(response){
            if (response.data.hasOwnProperty(keyEx)){
                el.setState({
                    error: response.data.message
                })
            }
        })
}
