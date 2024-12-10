import React from "react";
import "../../css/productPage.css"
import { addDeleteFavorite, addFavoriteMess, delFavoriteMess} from "../services/userService";
import { getItem } from "../services/itemService";
import { backToMain } from "../services/mainPageService";
import { cookieToObject } from "../services/cookieService";
import { userAreNotIden } from "../services/userService";

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
            console.log(message)
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
        <div>
            <img className="productImage" src = {this.state.image}/>
            <div className="productTextAndPrice">
                <div>{this.state.props.name}</div>
                <div>{this.state.props.price} {this.state.props.valute}</div>
            </div>
            <div className="productDescription">{this.state.props.description}</div>
            <div className="buttonsBLock">
                <button type="button" onClick={backToMain}>
                    Назад
                </button>
                <br/>
                <br/>
                <br/>
                <button type="button" onClick={
                    ()=>{
                        let cookie = cookieToObject();
                        if (cookie["user"].length === 0){
                            let div = document.getElementById("error")
                            div.innerHTML = userAreNotIden;
                        }
                        else{
                            addDeleteFavorite(cookie, this)
                        }
                    }
                }>{this.state.buttonText}</button>
                <div id="error"></div>
            </div>
        </div>
    )}
}

export default ItemPage;