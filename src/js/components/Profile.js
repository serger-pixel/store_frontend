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
import { getMyNews } from "../services/newsService";
import Header from "./Header";
import NewsTable from "./NewsTable.js";
import "../../css/profile.css"
import Modal from "./Modal.js";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import EditUsers from "./EditUsers";
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

        this.state = {image: "", news:[], users: [], error: ""}
        if (cookie["avatar"] !==  notImage.toString()){
            getImage(cookie["avatar"], this)
        }

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
                <button className="btn btn-primary" id="btnNews" onClick={() => {
                    getMyNews(this, "notModerator");
                }}>Управление новостями</button>
                <Modal id="notModerator"/>
                <button className="btn btn-primary" id="btnUsers" onClick={
                    ()=>{
                        getAllUsers(this, "notAccess");
                        }
                }>Управление пользователями</button>
                {this.props.element}
                <Modal id="notAccess"/>
            </div>
            
            
        )
    }
}
export default Profile