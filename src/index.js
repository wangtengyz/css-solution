import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 全局引入通用样式
import './assets/base/index.less'
import Views from 'pages/views';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Views />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
