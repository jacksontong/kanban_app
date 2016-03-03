import './main.css';
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import alt from './libs/alt';
import storage from './libs/storage';
import persist from './libs/persist';

persist(alt, storage, 'app');

ReactDom.render(<App />, document.getElementById('app'));