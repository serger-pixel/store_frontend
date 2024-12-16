import React from "react";
import Header from "./Header";
import { getAllUsers, ObjectToUserRow, roleEdit, setRole, setUserStatus, statusEdit } from "../services/adminService.js";
import { root } from "../../index.js";
import AddUser from "./AddUser.js";
import "../../css/edit.css"

class EditUsers extends React.Component{
    constructor(props){
        super(props)
        this.state = {users: [], error: ""}
        getAllUsers(this)
    }

    render(){
        console.log(this.state.users)
        let list = []
        for(let ind = 0; ind < this.state.users.length; ind++){
            list.push(ObjectToUserRow(this.state.users[ind], this))
        }
        console.log(list)
        return(<div>
            <Header/>
            <h1 className="display-5" id="titleEdit">Редактирование пользователя</h1>
            <div className="container" id="mainEdit">
                <div className="row">
                    <div className="col-sm-2">Логин</div>
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
                            console.log(value)
                            if(setValue !== value){
                                setUserStatus(this, id, setValue)
                                getAllUsers(this)
                            }
                            value = this.state.users[ind].role;
                            setValue = document.getElementById(roleEdit+id).value;
                            if(setValue !== value){
                                setRole(this, id, setValue)
                                getAllUsers(this)
                            }
                            
                        }
                    }
                }>Сохранить изменения</button>
                <button className="btn btn-primary" id="add" onClick={
                    ()=>{
                        root.render(<AddUser/>)
                    }
                }>Добавить нового пользователя</button>
            </div>
            </div>
        )
    }
}

export default EditUsers