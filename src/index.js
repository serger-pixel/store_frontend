import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { saveItem } from './js/services/itemService';
import './index.css';
import  "./css/styles.css";
import MainPage from './js/components/MainPage';
import ListItems from './js/components/ListItems';
import Registration from './js/components/Registration';
import EnterPage from './js/components/EnterPage';

export const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EnterPage/>)

