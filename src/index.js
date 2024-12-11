import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { saveItem, typeMain } from './js/services/itemService';
import MainPage from './js/components/MainPage';
import ListItems from './js/components/ListItems';
import { getTimeCnt } from './js/services/mainPageService';

export const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<MainPage element={<ListItems/>}/>)
document.cookie = "user="
document.cookie = "favorites="
document.cookie ="avatar="
console.log(document.cookie);
root.render(<MainPage element={<ListItems type ={typeMain}/>}/>)
setInterval(getTimeCnt, 1000)

