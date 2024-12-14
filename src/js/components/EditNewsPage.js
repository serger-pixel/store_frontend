import React from "react";
import { editDeleteEvent } from "../services/newsService";


function EditNewsPage(newsComp){
    return(
        <div id="editField">
            <label for="newHead">Заголовок</label>
            <input type="text" id="newHead" value={newsComp.state.head}/>
            <label for="newContent">Содержание</label>
            <input type="text" id="newContent" value={newsComp.state.content}/>
            <p id="author">{newsComp.props.author}</p>
            <p id="date">{newsComp.props.date}</p>
            <button id="edit" onClick={() => {
                let newHead = document.getElementById("newHead").value;
                let newContent = document.getElementById("newContent").value;
                newsComp.setState({
                    head: newHead,
                    content: newContent
                });
                editDeleteEvent(newsComp, true);
            }}>Редактировать</button>
        </div>
    )
}

export default EditNewsPage;