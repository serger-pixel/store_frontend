import React from "react";
import EnterRegPage from "./EnterRegPage";
import { addTitle, titleAdd, typeAdd } from "../services/adminService";
import { root } from "../..";
import EditUsers from "./EditUsers";
import Header from "./Header";

class AddUser extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div className="row" id="addUser">
            <EnterRegPage type={typeAdd} btnText={addTitle} title={titleAdd}/>
            <button className="btn btn-primary" id="back" onClick={
                ()=>{
                    root.render(<EditUsers/>)
                }
                }>Назад</button>
        </div>
        )
    }
}

export default AddUser