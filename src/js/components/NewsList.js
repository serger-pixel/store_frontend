import React from "react";
import { getNews, objectToNewsPrev} from "../services/newsService";
import "../../css/news.css"

/**
 * Класс-компонент списка новостей для главной страницы
 */
class NewsList extends React.Component{

    /**
     * Конструктор
     * @param props параметры
     * 
     */
    constructor(props){
        super(props);
        this.state = {news: []};
        getNews(this);
    }

    /**
     * Отображение компонента списка новостей
     * @returns компонент списка новостей
     */
    render(){
        let list = [];
        for(let ind = 0; ind < this.state.news.length; ind++){
            list.push(objectToNewsPrev(this.state.news[ind]));
        }

        return(
            <div>
                <h1 class="display-4" id="newsHeader">Новости</h1>
                <div className="container" id="News">
                    <div className="container" id="ListNews">
                        {list}
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsList;