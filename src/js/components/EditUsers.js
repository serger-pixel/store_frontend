import React from "react";
import Header from "./Header";
import { getAllUsers, ObjectToUserRow, roleEdit, setRole, setUserStatus, statusEdit } from "../services/adminService.js";
import bootstrap from "../../../node_modules/bootstrap/dist/js/bootstrap.js";
import Modal from "./Modal.js";
import UserRow from "./UserRow.js";

class EditUsers extends React.Component{
    constructor(props){
        super(props)
        this.state = {users: props.users, error: ""}
    }

    render(){
        console.log(this.state.users)
        let list = []
        for(let ind = 0; ind < this.state.users.length; ind++){
            list.push(ObjectToUserRow(this.state.users[ind], this))
        }
        console.log(list)
        return(
            <div>
                <Header/>
                <div className="row">
                <div className="col-sm-2">Логин</div>
                <div className="col-sm-2">Роль</div>
                <div className="col-sm-2">Статус</div>
                <div className="col">Действие с пользователем</div>
            </div>
                {list}
                <button className="btn btn-primary" onClick={
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
                <button className="btn btn-primary">Добавить нового пользователя</button>
            </div>
        )
    }
}

export default EditUsers