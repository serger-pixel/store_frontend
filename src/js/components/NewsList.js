import React from "react";

import "../../css/news.css"

function NewsList(props){
    return(
        <div className="container" id="News">
            <h1 class="display-4">Новости</h1>
            <div className="container" id="ListNews">
            </div>
        </div>
    )
}

export default NewsList;