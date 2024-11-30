import { useState } from "react";
import Enter from "./enter.js"
import {getItem} from "./itemService.js"
import { response } from "express";
// Компонент пользователь
//render
//onclick  = root.render(){}
// Регистрация и из регистрации в магазин
function UserComponent(indexRoot){
    //const [login, setLogin] = useState("");
    //const [photo, setPhoto] = useState("");
    console.log(indexRoot);
    return(
        <div>
            <div id="avatar"></div>
            <div id="wishList">Wishlist:</div>
            <button id="toShop" onClick= {() => {indexRoot.indexR.render(<MainPage/>);}}>Back to shop</button>
        </div>
    );
}

function MainPage({indexRoot}) {
    //let item =  JSON.parse(getItem(1));
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    getItem(1);
    console.log(getItem(1));
    return (
        <div>
            <div id="eventDiv"></div>
            <div id="itemListDiv">
                <div>
                    {/* <h3> {data.name} </h3>
                    <p> {data.description} </p> */}
                </div>
            </div>
            <div id="userPlace" onClick = {() => 
                {indexRoot.render(<UserComponent indexR = {indexRoot}/>);}}>UserNick</div>
            <div id="clockPlace">10.11.24</div>
            <div id="counterPlace">0</div>
            <button id="exitButton">Exit</button> 
        </div>
    );
}

export default MainPage; 
// const app = ReactDOMClient.createRoot(document.getElementById("app"));
// app.render(<Aboba/>);

// function Aboba(){
//     return(
//         <div>
//             <div id="avatar"></div>
//             <div id="wishList">Wishlist:</div>
//             <button id="toShop" >Back to shop</button>
//         </div>
//     );
// }
