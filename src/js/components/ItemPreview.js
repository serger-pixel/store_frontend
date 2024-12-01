import React from "react";
import "../../css/ItemPreview.css"

class ItemPreview extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div className="ItemPreview">
            <div>{this.props.name}</div>
            <div>{this.props.price}</div>
        </div>
    )}
}

export default ItemPreview;