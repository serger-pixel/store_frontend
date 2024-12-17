import React from "react";

/**
 * Класс-компонент отображения новости на главной странице
 */
class NewsPreview extends React.Component{

    /**
     * Конструктор
     * @param props заголовок(head), содержание(content) и автор(author) новости
     * 
     */
    constructor(props){
        super(props);

        this.state = {content: this.props.content};
    }

    /**
     * Отображение компонента новости
     * @returns компонент новости
     */
    render(){
        return(
            <div className="eventPrev">
                <p className="head">{this.props.head}</p>
                <p className="content">{this.state.content}</p>
                <p className="author">Автор: {this.props.author}</p>
            </div>
        );
    }

}

export default NewsPreview;
