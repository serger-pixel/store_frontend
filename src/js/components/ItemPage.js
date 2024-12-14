import React from "react";
import "../../css/product.css"
import { addDeleteFavorite, addFavoriteMess, delFavoriteMess} from "../services/userService";
import { getItem } from "../services/productService";
import { backToMain } from "../services/mainPageService";
import { cookieToObject } from "../services/cookieService";
import { userAreNotIden } from "../services/userService";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.js';

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
        <div class="card">
            <img class="card-img-top" src = {this.state.image}/>
            <div>
                <div class="card-title">{this.state.props.name}</div>
                <div className="productPrice">
                    {this.state.props.price} {this.state.props.valute}
                </div>
                <div className="productTitle">Описание</div>
                <div className="productDescription">{this.state.props.description}</div>
                <div className="productActive" onClick={
                    ()=>{
                        let cookie = cookieToObject();
                        if (cookie["user"].length === 0){
                            let div = document.getElementById("productError")
                            div.innerHTML = userAreNotIden;
                        }
                        else{
                            addDeleteFavorite(cookie, this)
                        }
                    }
                }>{this.state.buttonText}</div>
                <div className="productError" id={"productError"}></div>
            </div>
        </div>
    )}
}

export default ItemPage;