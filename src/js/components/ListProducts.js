import React from "react";
import {getAllItem, getFavorites, ObjectToProdPrev, typeMain} from "../services/productService.js"
import { selectItem } from "../services/productService.js";
import { cookieToObject } from "../services/cookieService.js";
import "../../css/product.css";

/**
 * Класс списка товаров
 */
class ListProducts extends React.Component{
    /**
     * Конструктор
     * @param props тип списка(type)
     * 
     */
    constructor(props)
    {    
        super(props);
        this.state={items: [], update: ""};
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
        console.log(this.state.items);
        if (this.state.items.length === 0){
            return(
                <div className="container" id="Products">
                    <h1 className="display-2">{this.props.title}</h1>
                    <h1 className="display-5" id="noProducts">Здесь ничего нет</h1>
                </div>
            )
        }
        let list = [];
        for(let ind = 0; ind < this.state.items.length; ind+=3){
            let row;
            let result = false;
            console.log(ind+2 < this.state.items.length)
            if (ind+2 < this.state.items.length){
                console.log(this.state.items[ind+2]);
                row = <div class="row">
                    <div class="col-sm-3 mb-4 mb-sm-0">
                        {ObjectToProdPrev(this.state.items[ind], this, this.props.type)}
                    </div>
                    <div class="col-sm-3 mb-3">
                        {ObjectToProdPrev(this.state.items[ind+1], this, this.props.type)}
                    </div>
                    <div class="col-sm-3 mb-3">
                        {ObjectToProdPrev(this.state.items[ind+2], this, this.props.type)}
                    </div>
                </div>
                result = true;
            }
            if(ind + 1 < this.state.items.length && !result){
                row = <div class="row">
                    <div class="col-sm-3 mb-3">
                        {ObjectToProdPrev(this.state.items[ind], this, this.props.type)}
                    </div>
                    <div class="col-sm-3 mb-3">
                        {ObjectToProdPrev(this.state.items[ind+1], this, this.props.type)}
                    </div>
                </div>
                result = true;
            }
            if(!result){
                row = <div class="row">
                        <div class="col-sm-2 mb-3 mb-sm-0">
                            {ObjectToProdPrev(this.state.items[ind], this, this.props.type)}
                        </div>
                    </div>
            }
            list.push(row);
        }
        return(
            <div className="container" id="Products">
                <h1 className="display-2">{this.props.title}</h1>
                <div className="container" id="ListProducts">
                    {list}
                </div>
            </div>
        )
    }
}

export default ListProducts;