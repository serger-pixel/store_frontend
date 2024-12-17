import React from "react";
import Header from "./Header";
import { errorEditlog, errorEditpass, errorUserAre, getAllUsers, loginEdit, ObjectToUserRow, passwordEdit, roleEdit, setLogin, setPassword, setRole, setUserStatus, statusEdit } from "../services/adminService.js";
import { root } from "../../index.js";
import AddUser from "./AddUser.js";
import "../../css/edit.css"
import { logErr, passwordErr, passwordRegex, usernameRegex } from "../services/userService.js";
import { cookieToObject } from "../services/cookieService.js";

/**
 * Класс-компонент таблицы редактирования пользователя
 */
class EditUsers extends React.Component{
    /**
     * Конструктор таблицы редактирования пользователя
     * @param props параметры
     */
    constructor(props){
        super(props);
        this.state = {users: [], error: ""};
        getAllUsers(this);
    }

    /**
     * Отображение таблицы редактирования пользователя
     * @returns таблица редактирования пользователя
     */
    render(){
        let list = [];
        for(let ind = 0; ind < this.state.users.length; ind++){
            list.push(ObjectToUserRow(this.state.users[ind], this));
        }
        return(<div>
            <Header/>
            <h1 className="display-5" id="titleEdit">Редактирование пользователя</h1>
            <div className="container" id="mainEdit">
                <div className="row">
                    <div className="col-sm-2">Логин</div>
                    <div className="col-sm-2">Изменение логина</div>
                    <div className="col-sm-2">Изменение пароля</div>
                    <div className="col-sm-2">Роль</div>
                    <div className="col-sm-2">Статус</div>
                    <div className="col">Действие с пользователем</div>
                </div>
                {list}
                <button className="btn btn-primary" id="save" onClick={
                    ()=>{
                        for(let ind = 0; ind < this.state.users.length; ind++){
                            let id = this.state.users[ind].id;
                            let value = this.state.users[ind].status;
                            let setValue = document.getElementById(statusEdit+id).value
                            if(setValue !== value){
                                setUserStatus(this, id, setValue);
                                getAllUsers(this);
                                getAllUsers(this);
                            }
                            value = this.state.users[ind].role;
                            setValue = document.getElementById(roleEdit+id).value;
                            if(setValue !== value){
                                setRole(this, id, setValue);
                                getAllUsers(this);
                                getAllUsers(this);
                            }
                            value = this.state.users[ind].login;
                            setValue = document.getElementById(loginEdit+id).value;
                            if(setValue !== ""){
                                let result = true
                                for(let j = 0; j < this.state.users.length; j++){
                                    if (this.state.users[j].login === setValue){
                                        result = false
                                        break;
                                    }
                                    let cookie = cookieToObject();
                                    if (cookie["user"] === setValue){
                                        result = false;
                                    }
                                }
                                if (result === true){
                                    if (usernameRegex.test(setValue)){
                                        setLogin(this, id, setValue);
                                        document.getElementById(errorEditlog + id)
                                        .innerHTML = "";
                                        document.getElementById(loginEdit + id).value="";
                                    }
                                    else{
                                        document.getElementById(errorEditlog + id)
                                        .innerHTML = logErr;
                                    }
                                }
                                else{
                                    document.getElementById(errorEditlog + id)
                                    .innerHTML = errorUserAre; 
                                }
                            }
                            else{
                                document.getElementById(errorEditlog + id)
                                .innerHTML = "";
                            }
                            setValue = document.getElementById(passwordEdit+id).value;
                            if(setValue !== ""){
                                if (passwordRegex.test(setValue)){
                                    setPassword(this, id, setValue);
                                    document.getElementById(errorEditpass + id)
                                    .innerHTML = "";
                                    document.getElementById(passwordEdit+id).value = ""
                                }
                                else{
                                    document.getElementById(errorEditpass + id)
                                    .innerHTML = passwordErr;
                                }
                            }
                            else{
                                document.getElementById(errorEditpass + id)
                                .innerHTML = "";
                            }
                        }
                    }
                }>Сохранить изменения</button>
                <button className="btn btn-primary" id="add" onClick={
                    ()=>{
                        root.render(<AddUser/>);
                    }
                }>Добавить нового пользователя</button>
            </div>
            </div>
        )
    }
}

export default EditUsers