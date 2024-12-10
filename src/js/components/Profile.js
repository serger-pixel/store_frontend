import React from "react";
import FileUploader from "./FileUploader";
import { root } from "../..";
import MainPage from "./MainPage";
import ListItems from "./ListItems";
import { typeMain } from "../services/itemService";
import { cookieToObject } from "../services/cookieService";
import { notImage } from "../services/userService";
import { getImage } from "../services/imageService";

class Profile extends React.Component{
    constructor(props){
        super(props)
        let cookie = cookieToObject();
        this.state = {image: ""}
        console.log(cookie["avatar"])
        if (cookie["avatar"] !==  notImage.toString()){
            getImage(cookie["avatar"], this)
        }
    }

    render(){
        return(
            <div>
                <div>Логин: {this.props.name}</div>
                <img src={this.state.image}/>
                <div>Списко желаемого:{this.props.element}</div>
                <div>Загрузка аватара: <FileUploader element={this}/></div>
                <button type="button" onClick={
                    ()=>{
                        root.render(
                            <MainPage element={<ListItems type ={typeMain}/>}/>
                        )
                    }
                }>Главная</button>
            </div>
        )
    }
}

export default Profile