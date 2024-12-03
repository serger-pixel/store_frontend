import React from "react";
import "../../css/ItemPreview.css"
import { selectItem } from "../services/itemService";
import { getImage } from "../services/imageService";

class ItemPreview extends React.Component{
    constructor(props){
        super(props)
        this.state = {image: ""}
        getImage(this.props.id, this)
    }

    render(){
        return(
        <div className="ItemPreview" onClick={()=>{selectItem(this.props.id)}}>
            <div>{this.props.name}</div>
            <img src ={this.state.image} className="ItemPreviewImage"/>
             <div className="ItemPreviewImage">{this.props.price} {this.props.valute}</div>
        </div>
    )}
}

export default ItemPreview;