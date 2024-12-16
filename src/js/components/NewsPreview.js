import React from "react";

class NewsPreview extends React.Component{
    constructor(props){
        super(props);

        this.state = {content: this.props.content};
    }

    render(){
        return(
            <div>
                <p id="head">{this.props.head}</p>
                <p id="content">{this.state.content}</p>
                <p id="author">{this.props.author}</p>
                <p id="date">{this.props.date}</p>
            </div>
        );
    }

}

export default NewsPreview;
