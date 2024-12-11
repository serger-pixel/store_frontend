import {getItem, typeFavorites, typeMain} from "../services/itemService.js"
import ListItems from "./ListItems.js"
import React from "react";
import { root } from "../../index.js";
import EnterRegPage from "./EnterRegPage.js";
import { typeEnt, typeReg } from "../services/userService.js";
import { cookieToObject, keyAvatar, keyFavorites, keyUser } from "../services/cookieService.js";
import Profile from "./Profile.js";
import MainPage from "./MainPage.js";
import "../../css/header.css"
class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let cookie = cookieToObject();
        let elementInUser = <div class="signInUp">
            <div class="signIn" onClick={
                ()=>{
                   root.render(<EnterRegPage type={typeEnt}/>) 
                }
            }>Вход</div>
            <div class="signUp" onClick={
                ()=>{
                    root.render(<EnterRegPage type={typeReg}/>)
                }
            }>Регистранция</div>
        </div>
        if (cookie["user"].length !== 0){
            elementInUser = <div class="signInUp">
                <div class="userButton" onClick={
                    ()=>{
                        root.render(<Profile 
                            element={<ListItems type={typeFavorites}/>}
                            name={cookie["user"]
                            }
                            />)
                    }
                }>{cookie["user"]}</div>
                <div class="outButton" onClick={
                    ()=>{
                        document.cookie = keyUser + "=";
                        document.cookie = keyFavorites + "=";
                        document.cookie = keyAvatar + "="
                        root.render(<MainPage element={<ListItems type={typeMain}/>}/>)
                    }
                }>Выйти</div>
            </div>
        }
        return(
            <div class="header">
                <div class="mainButton" onClick={
                    ()=>{
                        root.render(<MainPage element={<ListItems type ={typeMain}/>}/>)
                    }
                }>Главная</div>
                <div class="time" id="time"></div>
                <div class="cntUsers" id="cntUsers"></div>
                {elementInUser}
            </div>
        )
    }
}

export default Header;