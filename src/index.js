import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Homepage from './pages/homepage.js';
import Life from './pages/life.js';
import My from './pages/my.js';
import Friend from './pages/friend.js';
import Koubei from './pages/koubei.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Homepage />, document.getElementById('root'));
registerServiceWorker();
