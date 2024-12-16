import React from "react";
import FileUploader from "./FileUploader";
import { root } from "../..";
import MainPage from "./MainPage";
import ListProducts from "./ListProducts";
import { typeMain } from "../services/productService";
import { cookieToObject } from "../services/cookieService";
import { notImage } from "../services/userService";
import { getAllUsers } from "../services/adminService.js";
import { getImage } from "../services/imageService";
import Header from "./Header";
import "../../css/profile.css"
import EditUsers from "./EditUsers";
import Modal from "./Modal.js";
import bootstrap from "../../../node_modules/bootstrap/dist/js/bootstrap.js";

/**
 * Класс профиля пользователя
 */
class Profile extends React.Component{

    /**
     * Конструктор
     * @param
     * props - имя пользователя(name), id автара(image), список избранных товаров(element)
     */
    constructor(props){
        super(props)
        let cookie = cookieToObject();
        this.state = {image: "", users: [], error: ""}
        console.log(cookie["avatar"])
        if (cookie["avatar"] !==  notImage.toString()){
            getImage(cookie["avatar"], this)
        }
        getAllUsers(this);
    }

    /**
     * Отображение профиля пользователя
     * @return компонент с профилем пользователя
     */
    render(){
        console.log(document.cookie)
        return(
            <div className="conatiner" id="profile">
                <Header/>
                <div className="container" id="miniProfile">
                    <img id="imageProfile" src={this.state.image}/>
                    <h1 className="display-5" id="loginProfile">{this.props.name}</h1>
                </div>
                <div id="imageUplouder">Загрузка аватара: <FileUploader element={this}/></div>
                <button className="btn btn-primary" id="btnUsers" onClick={
                    ()=>{
                        console.log(this)
                        if (this.state.error.length !== 0){
                            let modal = document.getElementById("notAccess");
                            modal = new bootstrap.Modal(modal, {
                                backdrop: true,
                                keyboard: true,
                                focus: true
                            });
                            let modalText = document.getElementById("notAccesstext")
                            console.log(modalText)
                            modalText.innerHTML = "Недостаточно прав";
                            modal.show();
                        }
                        else{
                            root.render(<EditUsers/>)
                        }
                        }
                }>Управление пользователями</button>
                {this.props.element}
                <Modal id="notAccess"/>
            </div>
            
            
        )
    }
}

export default Profile