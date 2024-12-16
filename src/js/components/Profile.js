import React from "react";
import FileUploader from "./FileUploader";
import { root } from "../..";
import MainPage from "./MainPage";
import ListProducts from "./ListProducts";
import { typeMain } from "../services/productService";
import { cookieToObject } from "../services/cookieService";
import { notImage } from "../services/userService";
import { getImage } from "../services/imageService";
import { getMyNews } from "../services/newsService";
import Header from "./Header";
import NewsTable from "./NewsTable.js";
import "../../css/profile.css"
import Modal from "./Modal.js";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
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
        this.state = {image: "", news:[], error: ""}
        console.log(cookie["avatar"])
        if (cookie["avatar"] !==  notImage.toString()){
            getImage(cookie["avatar"], this)
        }
        getMyNews(this);
    }

    /**
     * Отображение профиля пользователя
     * @return компонент с профилем пользователя
     */
    render(){
        return(
            <div className="conatiner" id="profile">
                <Header/>
                <div className="container" id="miniProfile">
                    <img id="imageProfile" src={this.state.image}/>
                    <h1 className="display-5" id="loginProfile">{this.props.name}</h1>
                </div>
                <div id="imageUplouder">Загрузка аватара: <FileUploader element={this}/></div>
                <button className="btn btn-primary" id="btnNews" onClick={() => {
                    console.log()
                    if(this.state.error.length !== 0){
                        let modal = document.getElementById("notModerator");
                        modal = new bootstrap.Modal(modal, {
                            backdrop: true,
                            keyboard: true,
                            focus: true
                        });
                        let modalText = document.getElementById("notModeratortext");
                        modalText.innerHTML = "Недостаточно прав";
                        modal.show();
                    } else {
                        root.render(<NewsTable news = {this.state.news}/>);
                    }
                }}>Управление новостями</button>
                <div>{this.props.element}</div>
                <Modal id="notModerator"/>

            </div>
            
        )
    }
}

export default Profile