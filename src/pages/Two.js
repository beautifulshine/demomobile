/**import React,{Component} from 'react';
import {Text,ListView,NavBar,Icon,Button} from "antd-mobile";
import ReactDOM from "react-dom";
import axios from "axios";
import qs from "qs";

import { Flex, WhiteSpace } from 'antd-mobile';
import { List, InputItem, Switch, Stepper, Range } from 'antd-mobile';
function add(...values) {
  let sum = 0;
  for (var val of values) {
    sum += val;
  }
  
  return sum;
}

function add2(...values) {
  let sum = 0;
  for (var val of values) {
    sum += val;
  }
   alert(sum); 
}
const ss= add(1, 2, 3) // 6
const App = () => {
  return (
    <h1>ninghao.net</h1>
  )
}
const sortNumbers = (...numbers) => numbers.sort();
 class Two extends React.Component{
			 constructor(props) {
			super(props);  	
			this.state = {
			  data:[],
			  isLoading: true,
			  height: document.documentElement.clientHeight * 3 / 4,
			};
		  }
          componentDidMount(){
            var data = [ { author: "Pete Hunt", text: "This is one comment" },
                         { author: "Jordan Walke", text: "This is *another* comment" } ];
            (function(data){
			   var that = this;
			   this.setState({data:data}, function () {
				   console.log(that.state.data);
			   });
			}).call(this,data);
          }
	
  render () { 
  const  sa=add(2,5);
      return ( 
	  <div>  
	       <p onClick={()=>{add2(1,2,3)}}>p</p>
		   <p>{ss}</p>
		     <p>{sa}</p>
				 {sortNumbers(2,1,7,4)}
           <App/>    
     </div>
	  );
  }
	  
}  
console.log(...[1, 2, 3])
// 1 2 3

console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5
export default Two;
*/