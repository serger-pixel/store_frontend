import React from "react";
import "../../css/product.css"
import { addDeleteFavorite, addFavoriteMess, delFavoriteMess} from "../services/userService";
import { getItem } from "../services/productService";
import { backToMain } from "../services/mainPageService";
import { cookieToObject } from "../services/cookieService";
import { userAreNotIden } from "../services/userService";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.js';
import bootstrap from "../../../node_modules/bootstrap/dist/js/bootstrap.js";
import Modal from "./Modal.js";

/**
 * Класс страницы товара
 */
class ItemPage extends React.Component{

    /**
     * Конструктор
     * @param
     * props - id товара
     */
    constructor(props){
        super(props)
        let cookie = cookieToObject();
        let message;
        console.log(cookie["favorites"]);
        if (cookie["favorites"].includes(props.id.toString())){
            message = delFavoriteMess;
        }
        else{
            message = addFavoriteMess;
        }
        this.state ={props: {}, image: "", buttonText: message}
        getItem(props.id, this)
    }

    /**
     * Отображение страницы товара
     * @return компонент со страницей товара
     */
    render(){
        return(
        <div className="container" id="product">
            <img id="productPicture" src = {this.state.image}/>
            <div>
                <div id="prouductName">{this.state.props.name}</div>
                <div id="productPrice">
                    {this.state.props.price} {this.state.props.valute}
                </div>
                <div id="productTitle">Описание</div>
                <div id="productDescription">{this.state.props.description}</div>
                <button className="btn btn-primary" id="productBtn" onClick={
                    ()=>{
                        let cookie = cookieToObject();
                            if (cookie["user"].length === 0){
                                let modal = document.getElementById("id" + this.props.id);
                                modal = new bootstrap.Modal(modal, {
                                    backdrop: true,
                                    keyboard: true,
                                    focus: true
                                });
                                let modalText = document.getElementById("id" + this.props.id+
                                    "text"
                                )
                                modalText.innerHTML = userAreNotIden;
                                modal.show();
                            }
                            else{
                                addDeleteFavorite(cookie, this)
                        }
                    }
                }>{this.state.buttonText}</button>
                <Modal id={"id" + this.props.id}/>
            </div>
        </div>
    )}
}

export default ItemPage;