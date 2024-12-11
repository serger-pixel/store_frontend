import React from "react";
import Header from "./Header.js";
import "../../css/main.css"

/**
 * 
 */
class MainPage extends React.Component{ 
    /**
     * 
     */
    constructor(props){
        super(props);
    }

    /**
     * 
     */
    render(){
        return (
            <div>
                <Header/>
                <div className="main">
                    <div className="news">
                        <div class="blockTitle">Новости</div>
                    </div>
                    <div className="products">
                        <div class="blockTitle">Товары</div>
                        {this.props.element}
                    </div>
                </div>
            </div>
            );
    }
}

export default MainPage;
