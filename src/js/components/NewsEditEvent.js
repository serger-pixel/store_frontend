import React from "react";
import Header from "./Header";
import { root } from "../..";
import NewsTable from "./NewsTable";
import { editEvent } from "../services/newsService";
import { cookieToObject } from "../services/cookieService";

/**
 * Класс-компонент страницы редактирования новости
 */
class NewsEditEvent extends React.Component{
    /**
     * Конструктор
     * @param props список новостей(news)
     * 
     */
    constructor(props){
        super(props);
        this.state = {news: this.props.news, error: ""}
    }

    /**
     * Отображение компонента страницы редактирования новости
     * @returns компонент страницы редактирования новости
     */
    render(){
    return(
        <div>
            <Header/>
            <div id="editingField">
                <h1 className="display-2">Редактирование новости</h1><br/>
                <form id="editingForm">
                    <h1 className="display-3">{this.props.event["head"]}</h1><br/>

                    <div class="inputWrapper">
                        <label for="eventContent" class="form-label">Содержание новости</label>
                        <textarea id="eventContent">{this.props.event["text"]}</textarea>
                    </div>
                    <button id="addMyEvent" className="btn btn-primary" onClick={() => {
                        let res = document.getElementById("result");
                        let text = document.getElementById("eventContent").value;
                        if(!(text === "")){
                            let cookie = cookieToObject();
                            let content = document.getElementById("eventContent").value;
                            editEvent(this.props.event["id"], content, cookie["user"]);
                            res.innerHTML = "Отредактировано!";
                        } else {
                            res.innerHTML = "Заполните все поля";
                        }
                    }}>Редактировать</button>
                    <div id="result"></div><br/><br/>
                    <button id="toMyNews" className="btn btn-primary" onClick={() => {
                        root.render(<NewsTable news = {this.state.news}/>);
                    }}>Назад</button>
                </form>
            </div>
        </div>
    );}
}

export default NewsEditEvent;