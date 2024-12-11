import React from "react";
import ItemPreview from "./ItemPreview";
import { useState } from 'react';
import {getAllItem, getFavorites, typeMain} from "../services/itemService.js"
import { selectItem } from "../services/itemService.js";
import { cookieToObject } from "../services/cookieService.js";
import "../../css/listProduct.css"

/**
 * Класс списка товаров
 */
class ListItems extends React.Component{
    /**
     * Конструктор
     * @param
     * props - тип списка(type)
     */
    constructor(props)
    {    
        super(props);
        this.state={items: []};
        if(props.type === typeMain){
            getAllItem(this)
        }
        else{
            getFavorites(this, cookieToObject()["favorites"])
        }
    }

    /**
     * Отображение списка товаров
     * @return компонент со списком товаров
     */
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
            <div className="listProduct">{_list}</div>
        )
    }
}

export default ListItems;