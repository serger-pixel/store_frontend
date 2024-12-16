import React from "react";

class NewsPreview extends React.Component{
    constructor(props){
        super(props);

        this.state = {content: this.props.content};
    }

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
