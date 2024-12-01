import React from "react";

class ItemPage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div>
            <div>{this.props.name}</div>
            <div>{this.props.price} {this.props.valute}</div>
            <div>{this.props.description}</div>
        </div>
    )}
}

export default ItemPage;