import React from "react";
import Header from "./Header.js";
import NewsList from "./NewsList.js";
import ListProducts from "./ListProducts.js";
import { titleMain, typeMain } from "../services/productService.js";

/**
 * Класс-компонент главной страницы
 */
class MainPage extends React.Component{ 
    /**
     * Конструктор
     * @param props список товаров(element)
     * 
     */
    constructor(props){
        super(props);
    }

    /**
     * Отображение компонента главной страницы
     */
    render(){
        return (
            <div>
                <Header/>
                <div className="container">
                    <NewsList/>
                    {this.props.element}
                </div>
            </div>
            );
    }
}

export default MainPage;
