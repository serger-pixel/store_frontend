import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { saveItem, typeMain } from './js/services/productService';
import MainPage from './js/components/MainPage';
import ListProducts from './js/components/ListProducts';
import { getTimeCnt } from './js/services/mainPageService';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import { titleMain } from './js/services/productService.js';
import FileUploader from './js/components/FileUploader.js';

//корневой элемент
export const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<MainPage element={<ListProducts/>}/>)
console.log(document.cookie);
root.render(<MainPage element={<ListProducts type ={typeMain} title={titleMain}/>}/>)
setInterval(getTimeCnt, 1000)
