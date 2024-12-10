import { useState } from "react";
import {getItem, typeFavorites, typeMain} from "../services/itemService.js"
import {getAllItem} from "../services/itemService.js"
import ListItems from "./ListItems.js"
import ItemPage from "./ItemPage.js";
import React from "react";
import { root } from "../../index.js";
import EnterRegPage from "./EnterRegPage.js";
import { typeEnt, typeReg } from "../services/userService.js";
import { cookieToObject, keyAvatar, keyFavorites, keyUser } from "../services/cookieService.js";
import "../../css/user.css"
import "../../css/mainPage.css"
import Profile from "./Profile.js";
import { getTimeCnt } from "../services/mainPageService.js";

/**
 * 
 */
class MainPage extends React.Component{ 
    /**
     * 
     */
    constructor(props){
        super(props);
    }

    /**
     * 
     */
    render(){
        let cookie = cookieToObject();
        let elementInUser = <div>
            <button type="button" onClick={
                ()=>{
                   root.render(<EnterRegPage type={typeEnt}/>) 
                }
            }>Вход</button>
            <button type="button" onClick={
                ()=>{
                    root.render(<EnterRegPage type={typeReg}/>)
                }
            }>Регистранция</button>
        </div>
        if (cookie["user"].length !== 0){
            elementInUser = <div>
                <div onClick={
                    ()=>{
                        root.render(<Profile 
                            element={<ListItems type={typeFavorites}/>}
                            name={cookie["user"]
                            }
                            />)
                    }
                }>{cookie["user"]}</div>
                <button onClick={
                    ()=>{
                        document.cookie = keyUser + "=";
                        document.cookie = keyFavorites + "=";
                        document.cookie = keyAvatar + "="
                        root.render(<MainPage element={<ListItems type={typeMain}/>}/>)
                    }
                }>Выйти</button>
            </div>
        }
        return (
            <div>
                <div className="newsPart"></div>
                <div className="mainPart">
                    {this.props.element}
                </div>
                <div className="userPreview">
                    {elementInUser}
                </div>
                <div id="clockPlace"></div>
                <div id="counterPlace"></div>
                <button id="exitButton">Exit</button>
            </div>
            );
    }
}

export default MainPage;
