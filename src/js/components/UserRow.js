import React from "react";
import {standartRoles, standartStatuses} from "../services/userService.js";
import {deleteUser, getAllUsers, roleEdit, statusEdit } from "../services/adminService.js"

class UserRow extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let roles = standartRoles.slice();
        roles.splice(roles.indexOf(this.props.role), 1);
        let statuses = standartStatuses.slice();
        statuses.splice(statuses.indexOf(this.props.status), 1);
        return(
            <div className="row">
                <div className="col-sm-2">
                    {this.props.login}
                </div>
                <div className="col-sm-2">
                <select className="form-select" id={roleEdit + this.props.id} >
                    <option value={this.props.role} selected>{this.props.role}</option>
                    <option value={roles[0]}>{roles[0]}</option>
                    <option value={roles[1]}>{roles[1]}</option>
                </select>
                </div>
                <div className="col-sm-2">
                <select className="form-select" id={statusEdit + this.props.id}>
                    <option value={this.props.status} selected>{this.props.status}</option>
                    <option value={statuses[0]}>{statuses[0]}</option>
                </select>
                </div>
                <div className="col" id="deleteEdit" onClick={
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