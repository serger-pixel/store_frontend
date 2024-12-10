import React from "react";
import "../../css/productPreview.css"
import { selectItem } from "../services/itemService";
import { getImage } from "../services/imageService";

/**
 * Класс отображения товара на главной странице
 */
class ItemPreview extends React.Component{
    /**
     * Конструктор
     * @param
     * props - id и имя товара(name)
     */
    constructor(props){
        super(props)
        this.state = {image: ""}
        getImage(this.props.id, this)
    }

    /**
     * Отображение компонента с информацией о товаре
     */
    render(){
        return(
        <div className="productPreview" onClick={()=>{selectItem(this.props.id)}}>
            <div>{this.props.name}</div>
            <img src ={this.state.image} className="productPreviewImage"/>
             <div className="productPreviewImage">{this.props.price} {this.props.valute}</div>
        </div>
    )}
}

export default ItemPreview;