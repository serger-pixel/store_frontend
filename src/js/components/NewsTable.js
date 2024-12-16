import React from "react";
import Header from "./Header";
import { root } from "../..";
import NewsEditPage from "./NewsEditPage";

class NewsTable extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.news)
    }

    render(){
        let list = [];
        for(let i = 0; i < this.props.news.length; i++){
            console.log(this.props.news[i]["head"])
            let row = <div class="row">
                <div class="col-sm-2">
                    {this.props.news[i]["head"]}
                </div>
                <div class="col-sm-3 mb-3">
                    <button className="btn btn-primary" id="btnEdit">Редактировать</button>
                </div>
                <div class="col-sm-3 mb-3">
                    <button className="btn btn-primary" id="btnDelete">Удалить</button>
                </div>
            </div>
            list.push(row);
        }
        
        return(
            <div>
                <Header/>
                <div className="container" id="newsTable">
                    {list}
                </div>
                <button className="btn btn-primary" id="addEvent" onClick={() => {
                    root.render(<NewsEditPage/>);
                }}>Добавить новость</button><br/><br/>
                <button className="btn btn-primary" id="saveChanges">Сохранить изменения</button>
            </div>
        )
    }
}

export default NewsTable;