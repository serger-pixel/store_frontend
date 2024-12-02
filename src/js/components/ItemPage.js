import React from "react";
import { getItem } from "../services/itemService";

class ItemPage extends React.Component{
    constructor(props){
        super(props)
        this.state ={props: {}}
        getItem(props.key, this)
    }

    render(){
        return(
        <div>
            <div>{this.state.props.name}</div>
            <div>{this.state.props.price} {this.state.props.valute}</div>
            <div>{this.state.props.description}</div>
        </div>
    )}
}

export default ItemPage;