import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
//import { Button, Icon } from 'antd-mobile';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';





class Test extends Component {
/* 	handleClick(ev, arg1, arg2,...arg) {
		alert(ev);
		alert(arg1);
		alert(arg2);
		alert(...arg);
		
    
} */
	 render() {
    return (
      <div>
        Hello {this.props.name+this .props.age}
      </div>
    );
  }

 /*  render() {
    return (
      <div >
	  <WingBlank>
	   <Button>default</Button><WhiteSpace />
		<Button disabled>default disabled</Button><WhiteSpace />
        <Button  onClick={() => {this.handleClick()}}> default disabled2</Button><WhiteSpace />
		<br/>
		<Button type='primary' onClick={() => {this.handleClick('a', 'c', '1')}}/> 
		<br/>
		<button onClick={() => {this.handleClick('a', 'c', '1')}}/> 
		<br/>
		<button onClick={(ev, arg1, arg2,...arg) => {this.handleClick(ev, arg1, arg2,...arg)}}/> 
		<br/>
		</WingBlank>
      </div>
    );
  } */
}

export default Test;
