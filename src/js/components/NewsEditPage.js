import React from "react";
import Header from "./Header";
import { root } from "../..";
import NewsTable from "./NewsTable";
import { saveEvent } from "../services/newsService";
import { cookieToObject } from "../services/cookieService";
import { getMyNews } from "../services/newsService";

class NewsEditPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {news: this.props.news, error: ""}
    }
    render(){
    return(
        <div>
            <Header/>
            <div id="editingField">
                <h1 className="display-2">Добавление новости</h1><br/>
                <form id="editingForm">
                    <div class="inputWrapper" id="inputWrapper">
                        <label for="eventHead" class="form-label">Заголовок новости</label>
                        <input type="text" id="eventHead"/>
                    </div>
                    <div class="inputWrapper">
                        <label for="eventContent" class="form-label">Содержание новости</label>
                        <textarea id="eventContent"></textarea>
                    </div>
                    <button id="addMyEvent" className="btn btn-primary" onClick={() => {
                        let res = document.getElementById("result");
                        let head = document.getElementById("eventHead").value;
                        let text = document.getElementById("eventContent").value;
                        if(!(head === "" || text === "")){
                            let cookie = cookieToObject();
                            let author = cookie["user"];
                            const now = new Date();
                            let time = (now.valueOf()).toString();
                            
                            let myEvent = {
                                head: head,
                                text: text,
                                author: author,
                                time: time
                            }
                            saveEvent(myEvent, author);
                            res.innerHTML = "Добавлено!";
                        } else {
                            res.innerHTML = "Заполните все поля";
                        }

                    }}>Добавить</button>
                    <div id="result"></div><br/><br/>
                    <button id="toMyNews" className="btn btn-primary" onClick={() => {
                        root.render(<NewsTable news = {this.state.news}/>);
                    }}>Назад</button>
                </form>
            </div>
        </div>
    );}
}

export default NewsEditPage;