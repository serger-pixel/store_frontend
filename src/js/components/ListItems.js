import React from "react";
import ItemPreview from "./ItemPreview";
import { useState } from 'react';
import {getAllItem} from "../services/itemService.js"
import { selectItem } from "../services/itemService.js";


class ListItems extends React.Component{
    constructor(props)
    {    
        super(props)
        this.state = {items: []};
        getAllItem(this.setState, this.state.items);
        console.log(this.state);
        this._list = []
        for(var ind in this.state.items){
            console.log(this.state.items[ind]);
            this._list.push(
                <ItemPreview 
                name={this.state.items[ind].name}
                price={this.state.items[ind].price}
                valute={this.state.items[ind].valute}
                onClick={()=>{
                    selectItem(props.setMain, props.setItem, props.setProp, this.state.items[ind])
                }}
                />
            )
        }}
        render(){
            return(
                <div>{this._list}</div>
            )
        }
}

export default ListItems;