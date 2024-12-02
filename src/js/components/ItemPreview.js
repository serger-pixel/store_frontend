import React from "react";
import "../../css/ItemPreview.css"
import { selectItem } from "../services/itemService";

class ItemPreview extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div className="ItemPreview" onClick={()=>{selectItem(this)}}>
            <div>{this.props.name}</div>
            <div>{this.props.price}</div>
        </div>
    )}
}

export default ItemPreview;