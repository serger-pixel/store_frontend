import React from "react";
import { getNews, objectToNewsPrev} from "../services/newsService";
import "../../css/news.css"

class NewsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {news: []};
        getNews(this);
    }
    render(){
        let list = [];
        for(let ind = 0; ind < this.state.news.length; ind++){
            console.log(this.state.news[ind]);
            list.push(objectToNewsPrev(this.state.news[ind]));
        }

        return(
            <div className="container" id="News">
                <h1 class="display-4">Новости</h1>
                <div className="container" id="ListNews">
                    {list}
                </div>
            </div>
        );
    }
}

export default NewsList;