import React from "react";
import {adminFileUpl, standartRoles, standartStatuses} from "../services/userService.js";
import {deleteUser, errorEditlog, errorEditpass, getAllUsers, loginEdit, passwordEdit, roleEdit, statusEdit } from "../services/adminService.js"
import FileUploader from "./FileUploader.js";

/**
 * Компонент строчки редактирования
 */
class UserRow extends React.Component{
    /**
     * Конструктор
     * @param props 
     */
    constructor(props){
        super(props)
    }

    /**
     * Отображения строчки редактирования
     * @returns 
     */
    render(){
        let roles = standartRoles.slice();
        roles.splice(roles.indexOf(this.props.role), 1);
        let statuses = standartStatuses.slice();
        statuses.splice(statuses.indexOf(this.props.status), 1);
        return(
            <div className="row">
                <div className="col-sm-1 mb-3" id={loginEdit + this.props.id+"value"}>{this.props.name}</div>
                <div className="col-sm-2 mb-3">
                    <input type="text" id={loginEdit + this.props.id}/>
                    <div id={errorEditlog + this.props.id}></div>
                </div>
                <div className="col-sm-2 mb-4">
                    <input type="password" id={passwordEdit + this.props.id}/>
                    <div id={errorEditpass + this.props.id}></div>
                </div>  
                <div className="col-sm-1 mb-4">
                <select className="form-select" id={roleEdit + this.props.id} >
                    <option value={this.props.role} selected>{this.props.role}</option>
                    <option value={roles[0]}>{roles[0]}</option>
                    <option value={roles[1]}>{roles[1]}</option>
                </select>
                </div>
                <div className="col-sm-1 mb-4">
                <select className="form-select" id={statusEdit + this.props.id}>
                    <option value={this.props.status} selected>{this.props.status}</option>
                    <option value={statuses[0]}>{statuses[0]}</option>
                </select>
                </div>
                <div className="col-sm-1 "><FileUploader element={this} type={adminFileUpl}/></div>
                <div className="col-sm-1" id="deleteEdit" onClick={
                    ()=>{
                        deleteUser(this.props.table, this.props.id)
                        getAllUsers(this.props.table)
                        getAllUsers(this.props.table)
                    }
                }>
                    <button className="btn btn-primary">Удалить</button>
                </div>
            </div>
        )
    }
}

export default UserRow