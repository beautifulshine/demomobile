import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Homepage from './pages/homepage.js';
import Test from './Test';
import {HashRouter,Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import homepage from './pages/homepage';
import Carousel from './pages/Carousel';
import friend from './pages/friend';
import koubei from './pages/koubei';
import Three from './pages/Three';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
(
	  <Router history={HashRouter}>
	 	<Switch>
	  		<Route exact path="/panda" component={homepage}/>
			<Route exact path="/panda/Carousel" component={Carousel}/>
			<Route exact path="/panda/friend" component={friend}/>
			<Route exact path="/panda/koubei" component={koubei}/>
			<Route exact path="/panda/Three" component={Three}/>
		</Switch>
	  </Router>
	), 
document.getElementById('root'));

registerServiceWorker();
