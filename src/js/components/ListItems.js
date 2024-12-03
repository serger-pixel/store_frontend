import React from "react";
import ItemPreview from "./ItemPreview";
import { useState } from 'react';
import {getAllItem} from "../services/itemService.js"
import { selectItem } from "../services/itemService.js";


class ListItems extends React.Component{
    constructor(props)
    {    
        super(props);
        this.state={items: []};
        getAllItem(this)
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