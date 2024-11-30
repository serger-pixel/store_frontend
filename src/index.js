import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { saveItem } from './js/itemService';
import './index.css';
import FileUploader from "./js/FileUploader"

function AddItem(){
    const [name, setName] = useState("");
    const [price, setPrice] = useState ("");
    return(
      <form>
        <label for="name">Имя товара</label>
        <input type='text' name='name' id='name'/><br/>
        <label for='price'>Цена</label>
        <input type='text' name='price' id='price'/><br/>
        <button type="button" onClick={()=>{
          console.log(name);
          console.log(price);
          setName(document.getElementById("name").value);
          setPrice(document.getElementById("price").value);
          saveItem({
            name: name,
            price: price
          });
          }}>Создать</button>
      </form>
      
    );
  }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FileUploader/>)
