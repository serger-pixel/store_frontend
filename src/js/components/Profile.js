import React from "react";
import FileUploader from "./FileUploader";
import { root } from "../..";
import MainPage from "./MainPage";
import ListItems from "./ListItems";
import { typeMain } from "../services/itemService";
import { cookieToObject } from "../services/cookieService";
import { notImage } from "../services/userService";
import { getImage } from "../services/imageService";
import Header from "./Header";
import "../../css/profile.css"

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
        this.state = {image: ""}
        console.log(cookie["avatar"])
        if (cookie["avatar"] !==  notImage.toString()){
            getImage(cookie["avatar"], this)
        }
    }

    /**
     * Отображение профиля пользователя
     * @return компонент с профилем пользователя
     */
    render(){
        return(
            <div>
                <Header/>
                <div className="loginProfile">Логин: {this.props.name}</div>
                <img className="imageProfile"src={this.state.image}/>
                <div className="favTitle">Списко желаемого:</div>
                <div className="listProduct">{this.props.element}</div>
                <div className="fileUplouder">Загрузка аватара: <FileUploader element={this}/></div>
            </div>
            
        )
    }
}

export default Profile