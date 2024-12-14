import React from "react";

class NewsPreview extends React.Component{
    constructor(props){
        super(props);
        props.id = "123";
        props.author = "Автор";
        props.date = "14.12.24";

        this.state = {content: "Важная новость", head: "Заголовок"};
    }

    render(){
        return(
            <div>
                <p id="head">{this.state.head}</p>
                <p id="content">{this.state.content}</p>
                <p id="author">{this.props.author}</p>
                <p id="date">{this.props.date}</p>
            </div>
        );
    }

}

export default NewsPreview;
