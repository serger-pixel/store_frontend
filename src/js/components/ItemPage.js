import React from "react";
import { getItem } from "../services/itemService";
import { backToMain } from "../services/mainPageService";

class ItemPage extends React.Component{
    constructor(props){
        super(props)
        this.state ={props: {}, image: ""}
        getItem(props.id, this)
    }

    render(){
        return(
        <div>
            <div>{this.state.props.name}</div>
            <div>{this.state.props.price} {this.state.props.valute}</div>
            <div>{this.state.props.description}</div>
            <img src = {this.state.image}/>
            <button type="button" onClick={backToMain}>
                Назад
            </button>
        </div>
    )}
}

export default ItemPage;