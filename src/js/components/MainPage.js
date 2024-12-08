import { useState } from "react";
import {getItem} from "../services/itemService.js"
import {getAllItem} from "../services/itemService.js"
import ListItems from "./ListItems.js"
import ItemPage from "./ItemPage.js";
import React from "react";
import { root } from "../../index.js";

class MainPage extends React.Component{ 
    constructor(props){
        super(props);
    }

    render()
    {  console.log(document.cookie)
        return (
            <div>
                <div id="eventDiv"></div>
                <div id="itemListDiv">
                    {this.props.element}
                </div>
                <div id="userPlace">UserNick</div>
                <div id="clockPlace">10.11.24</div>
                <div id="counterPlace">0</div>
                <button id="exitButton">Exit</button>
            </div>
            );
    }
}

export default MainPage;
