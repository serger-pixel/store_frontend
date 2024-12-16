import React from "react";
import Header from "./Header";
import { root } from "../..";
import NewsTable from "./NewsTable";
import { saveEvent } from "../services/newsService";
import { cookieToObject } from "../services/cookieService";

function NewsEditPage(props){
    return(
        <div id="editingField">
            <Header/>
            <h1 className="display-2">Добавление новости</h1><br/>
            <form id="editingForm">
                <div class="inputWrapper">
                    <label for="eventHead" class="form-label">Заголовок новости</label>
                    <input type="text" id="eventHead"/>
                </div>
                <div class="inputWrapper">
                    <label for="eventContent" class="form-label">Содержание новости</label>
                    <textarea id="eventContent"></textarea>
                </div>
                <button id="addMyEvent" className="btn btn-primary" onClick={() => {
                    let head = document.getElementById("eventHead").value;
                    let text = document.getElementById("eventContent").value;
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
                    saveEvent(myEvent, cookie["user"]);

                }}>Добавить</button><br/><br/>
                <button id="toMyNews" className="btn btn-primary" onClick={() => {
                    root.render(<NewsTable news = {props.news}/>);
                }}>Назад</button>
            </form>
        </div>
    );
}

export default NewsEditPage;