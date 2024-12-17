import React from "react";
import EnterRegPage from "./EnterRegPage";
import { addTitle, titleAdd, typeAdd } from "../services/adminService";
import { root } from "../..";
import EditUsers from "./EditUsers";

/**
 * Класс-компонент для добавления нового полльзователя
 */
class AddUser extends React.Component{
    /**
     * Конструктор
     * @param props параметры
     */
    constructor(props){
        super(props);
    }

    /**
     * Отображение компонента добавления нового пользователя
     * @returns компонент добавления нового пользователя
     */
    render(){
        return(
        <div className="row" id="addUser">
            <EnterRegPage type={typeAdd} btnText={addTitle} title={titleAdd}/>
            <button className="btn btn-primary" id="back" onClick={
                ()=>{
                    root.render(<EditUsers/>);
                }
                }>Назад</button>
        </div>
        )
    }
}

export default AddUser