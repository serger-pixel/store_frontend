import React from "react";
import "../../css/product.css";
import { selectItem } from "../services/productService.js";
import { getImage } from "../services/imageService.js";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import { addFavoriteMess, delFavoriteMess, userAreNotIden } from "../services/userService.js";
import { cookieToObject } from "../services/cookieService.js";
import Modal from "./Modal.js";
import bootstrap from "../../../node_modules/bootstrap/dist/js/bootstrap.js";

/**
 * Класс отображения товара на главной странице
 */
class ProductPreview extends React.Component{
    constructor(props) {
        super(props);
        let message;
        let cookie = cookieToObject();
        if (cookie["favorites"].includes(props.id.toString())){
            message = delFavoriteMess;
        }
        else{
            message = addFavoriteMess;
        }
        this.state ={image: "", buttonText: message}
        getImage(this.props.id, this)
    }

    render() {
        return (
            <div className="card">
                <img src={this.state.image} className="card-img-top" alt={this.props.name} 
                onClick={()=>{selectItem(this.props.id)}}/>
                <div className="card-body" onClick={()=>{selectItem(this.props.id)}}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{this.props.name}</li>
                        <li className="list-group-item">Цена: {this.props.price} {this.props.valute}</li>
                    </ul>
                </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary" onClick={
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
                        }
                        }>{this.state.buttonText}</a>
                </div>
                <Modal id={"id" + this.props.id}/>
            </div>
            
        );
    }
}
export default ProductPreview;