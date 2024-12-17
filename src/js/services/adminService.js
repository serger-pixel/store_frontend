import axios from "axios";
import { cookieToObject } from "./cookieService";
import { keyEx, URL } from "./userService";
import UserRow from "../components/UserRow";
import { root } from "../..";
import bootstrap from "../../../node_modules/bootstrap/dist/js/bootstrap.js";
import EditUsers from "../components/EditUsers.js";

/**
 * Идентификатор модал для редактирования роли
 */
export const roleEdit = "roleEdit";

/**
 * Идентификатор модал для редактирования статуса
 */
export const statusEdit = "statusEdit";

/**
 * Тип компонента для добавления пользователя
 */
export const typeAdd = "Add";

/**
 * Надпись для кнопки добавления пользователя
 */
export const addTitle = "Добавить";

/**
 * Заголовок добавления пользователя
 */
export const titleAdd = "Добавление пользователя";

/**
 * Получение всех пользователей
 * @param el компонент
 * @param id идентификатор модал
 */
export async function getAllUsers(el, id="None"){
    let cookie = cookieToObject();
    await axios.get(URL + "/" + cookie["user"]+ "/get/all")
    .then(function(response){ 
        console.log(response.data)
        if (response.data.hasOwnProperty(keyEx)){
            el.setState({
                error: response.data.message
            })
            if (id !== "None"){
                let modal = document.getElementById(id);
                modal = new bootstrap.Modal(modal, {
                    backdrop: true,
                    keyboard: true,
                    focus: true
                });
                let modalText = document.getElementById(id + "text")
                console.log(modalText)
                modalText.innerHTML = "Недостаточно прав";
                modal.show();
            }
        }
        else{
            el.setState({
                users: response.data,
                error: ""
            })
            root.render(<EditUsers/>)
        }
        console.log(id);
        console.log(el.state.error)
    })
}

/**
 * Преобразование объекта в строчку редактирования
 * @param obj 
 * @param table таблица редактирования
 * @returns 
 */
export function ObjectToUserRow(obj, table){
    return <UserRow 
        role={obj.role}
        login={obj.login}
        id={obj.id}
        status = {obj.status}
        table = {table}
    />
}

/**
 * Удаление пользователя
 * @param el компонент
 * @param id идентификатор пользователя, которого удаляют
 */
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

/**
 * Изменение статуса пользователя
 * @param el компонент
 * @param id идентификатор пользователя, у которого изменяют статус
 * @param status статус
 */
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
/**
* Изменение роли пользователя
* @param el компонент
* @param id идентификатор пользователя, у которого изменяют роль
* @param role роль
*/
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
