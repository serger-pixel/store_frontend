import {getItem, typeFavorites, typeMain} from "../services/productService.js"
import ListProducts from "./ListProducts.js"
import React from "react";
import { root } from "../../index.js";
import EnterRegPage from "./EnterRegPage.js";
import { typeEnt, typeReg } from "../services/userService.js";
import { cookieToObject, keyAvatar, keyFavorites, keyUser } from "../services/cookieService.js";
import Profile from "./Profile.js";
import MainPage from "./MainPage.js";
import "../../css/header.css"
import { titleMain } from "../services/productService.js";

/**
 * Класс-компонент заголовка страницы
 */
class Header extends React.Component{

    /**
     * Конструктор
     * @param 
     * props параметры
     */
    constructor(props){
        super(props)
    }

    /**
     * Отображение заголовка
     * @returns компонент заголовка
     */
    render(){
    //     let cookie = cookieToObject();
    //     let elementInUser = <div className="signInUp">
    //         <div className="signIn" onClick={
    //             ()=>{
    //                root.render(<EnterRegPage type={typeEnt}/>) 
    //             }
    //         }>Вход</div>
    //         <div className="signUp" onClick={
    //             ()=>{
    //                 root.render(<EnterRegPage type={typeReg}/>)
    //             }
    //         }>Регистранция</div>
    //     </div>
    //     if (cookie["user"].length !== 0){
    //         elementInUser = <div className="signInUp">
    //             <div className="userButton" onClick={
    //                 ()=>{
    //                     root.render(<Profile 
    //                         element={<ListProducts type={typeFavorites}/>}
    //                         name={cookie["user"]
    //                         }
    //                         />)
    //                 }
    //             }>{cookie["user"]}</div>
    //             <div className="outButton" onClick={
    //                 ()=>{
                    //     document.cookie = keyUser + "=";
                    //     document.cookie = keyFavorites + "=";
                    //     document.cookie = keyAvatar + "="
                    //     root.render(<MainPage element={<ListProducts type={typeMain}/>}/>)
                    // }
    //             }>Выйти</div>
    //         </div>
    //     }
    //     return(
    //         <div className="header">
    //             <div className="mainButton" onClick={
    //                 ()=>{
    //                     root.render(<MainPage element={<ListProducts type ={typeMain}/>}/>)
    //                 }
    //             }>Главная</div>
    //             <div className="time" id="time"></div>
    //             <div className="cntUsers" id="cntUsers"></div>
    //             {elementInUser}
    //         </div>
    //     )
    let cookie = cookieToObject();
    let entryUser;
    let regOut;
    if (cookie["user"].length === 0){
        entryUser = <a className="nav-link" href="#" id="entryUser" onClick={
            ()=>{
                root.render(<EnterRegPage type={typeEnt}/>)
            }
        }>Вход</a>
        regOut = <a className="nav-link" href="#" id="regOut" onClick={
            ()=>{
                root.render(<EnterRegPage type={typeReg}/>)
            }
        }>Регистрация</a>
    }
    else{
        entryUser =  <a className="nav-link" href="#" id="entryUser" onClick={
            ()=>{
                root.render(<Profile 
                    element={<ListProducts type={typeFavorites}/>}
                    name={cookie["user"]
                    }
                />)
            }
        }>{cookie["user"]}</a>
        regOut = <a className="nav-link" href="#" id="regOut" onClick={
            ()=>{
                document.cookie = keyUser + "=";
                document.cookie = keyFavorites + "=";
                document.cookie = keyAvatar + "="
                root.render(<MainPage element={<ListProducts type={typeMain}
                title ={titleMain}/>}/>)
            }
        }>Выход</a>
    }
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="mainNav">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" href="#" id="mainNav" onClick={
                    ()=>{
                        root.render(<MainPage element={<ListProducts type={typeMain}
                        title ={titleMain}/>}/>)
                    }
                }>ГЛАВНАЯ</a>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled" href="#" id="timeNav"></a>
                </li>   
                <li className="nav-item">
                <a className="nav-link disabled" href="#" id="cntNav">Pricing</a>
                </li>
                <li className="nav-item">
                {entryUser}
                </li>
                <li className="nav-item">
                {regOut}
                </li>
            </ul>
            </div>
        </div>
    </nav>
    )
    }
    
}

export default Header;