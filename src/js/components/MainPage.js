import React from "react";
import Header from "./Header.js";
import "../../css/main.css"

/**
 * Класс-компонент главной страницы
 */
class MainPage extends React.Component{ 
    /**
     * Конструктор
     * @param
     * props - список товаров
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
                <div className="main">
                    <div className="news">
                        <div class="blockTitle">Новости</div>
                    </div>
                    <div className="products">
                        <div class="blockTitle">Товары</div>
                        {this.props.element}
                    </div>
                </div>
            </div>
            );
    }
}

export default MainPage;
