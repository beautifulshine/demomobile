import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import TabBarExample from './pages/homepage.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TabBarExample />, document.getElementById('root'));
registerServiceWorker();
