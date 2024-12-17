import React from "react";
import Header from "./Header";
import { root } from "../..";
import NewsEditPage from "./NewsEditPage";
import { cookieToObject } from "../services/cookieService";
import { deleteEvent, getMyNews } from "../services/newsService";
import NewsEditEvent from "./NewsEditEvent";

/**
 * Класс-компонент таблицы новостей модератора
 */
class NewsTable extends React.Component{

    /**
     * Конструктор
     * @param props список новостей(news)
     * 
     */
    constructor(props){
        super(props);
        this.state = {news: this.props.news, error: ""}
        getMyNews(this);
    }

    /**
     * Отображение компонента таблицы новостей
     * @returns компонент таблицы новостей
     */
    render(){
        let list = [];
        for(let i = 0; i < this.state.news.length; i++){
            let row = <div class="row">
                <div class="col-sm-2">
                    {this.state.news[i]["head"]}
                </div>
                <div class="col-sm-3 mb-3">
                    <button className="btn btn-primary" id="btnEdit" onClick={() => {
                        root.render(<NewsEditEvent news = {this.state.news} event = {this.state.news[i]}/>);
                    }}>Редактировать</button>
                </div>
                <div class="col-sm-3 mb-3">
                    <button className="btn btn-primary" id="btnDelete" onClick={() => {
                        let cookie = cookieToObject();
                        deleteEvent(cookie["user"], this.state.news[i]["id"]);
                        getMyNews(this);
                        getMyNews(this);
                    }}>Удалить</button>
                </div>
            </div>
            list.push(row);
        }
        
        return(
            <div>
                <Header/>
                <div className="container" id="newsTable">
                    <h1 className="display-5">Управление новостями</h1>
                    <div className="row">
                        <div class="col-sm-3">Заголовок</div>
                    </div>
                    <br/>
                    {list}
                </div>
                <button className="btn btn-primary" id="addEvent" onClick={() => {
                    root.render(<NewsEditPage news = {this.state.news}/>);
                }}>Добавить новость</button>    
            </div>
        )
    }
}

export default NewsTable;