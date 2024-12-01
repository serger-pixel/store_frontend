import { useState } from "react";
import {getItem} from "../services/itemService.js"
import {getAllItem} from "../services/itemService.js"
import ListItems from "./ListItems.js"
import ItemPage from "./ItemPage.js";
import React from "react";

function MainPage()
 {
    // const [mainPage, setMain] = useState(true);
    // const [itemPage, setItem] = useState(false);
    // const [propItem, setProp] = useState({})
    if (true)
{    return (
        <div>
            <div id="eventDiv"></div>
            <div id="itemListDiv">
                <ListItems />
                {/*setMain={setMain} setItem={setItem} setProp={setProp} */}
            </div>
            <div id="userPlace">UserNick</div>
            <div id="clockPlace">10.11.24</div>
            <div id="counterPlace">0</div>
            <button id="exitButton">Exit</button>
        </div>
        );}
    // if (false){
    //     return(
    //         // <ItemPage 
    //         // name={propItem.name}
    //         // price={propItem.price}
    //         // valute={propItem.valute}
    //         // description={propItem.description}
    //         // />
    //     )
    // }

 }

export default MainPage;
