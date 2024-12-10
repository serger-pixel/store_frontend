import React from "react";
import ItemPreview from "./ItemPreview";
import { useState } from 'react';
import {getAllItem, getFavorites, typeMain} from "../services/itemService.js"
import { selectItem } from "../services/itemService.js";
import { cookieToObject } from "../services/cookieService.js";

class ListItems extends React.Component{
    constructor(props)
    {    
        super(props);
        this.state={items: []};
        if(props.type === typeMain){
            getAllItem(this)
        }
        else{
            console.log(cookieToObject()["favorites"]);
            getFavorites(this, cookieToObject()["favorites"])
        }
    }
        render(){
            let _list = [];
            for(var ind in this.state.items){
                _list.push(
                    <ItemPreview 
                    name={this.state.items[ind].name}
                    price={this.state.items[ind].price}
                    valute={this.state.items[ind].valute}
                    id={this.state.items[ind].id}
                    image={this.state.items[ind].idImage}
                    />
                )
            }
            return(
                <div>{_list}</div>
            )
        }
}

export default ListItems;