import React from "react";
import FileUploader from "./FileUploader";
import { root } from "../..";
import MainPage from "./MainPage";
import ListProducts from "./ListProducts";
import { typeMain } from "../services/productService";
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
            <div className="conatiner" id="profile">
                <Header/>
                <div className="container" id="miniProfile">
                    <img id="imageProfile" src={this.state.image}/>
                    <h1 className="display-5" id="loginProfile">{this.props.name}</h1>
                </div>
                <div id="imageUplouder">Загрузка аватара: <FileUploader element={this}/></div>
                <div>{this.props.element}</div>
            </div>
            
        )
    }
}

export default Profile