/**import React from 'react';
import {Button} from "antd-mobile";
//import ReactDOM from "react-dom";

//import Conf from "../conf/Conf";
import { Flex, WhiteSpace } from 'antd-mobile';
import { List} from 'antd-mobile';
//import { createForm } from 'rc-form';

const Item = List.Item;

//ͷ头部  
var f = () => 5;

var data = [{ "when": "2 minutes ago",
    "who": "Jill Dupre",
    "description": "Created new account"
  },
  {
    "when": "1 hour ago",
    "who": "Lose White",
    "description": "Added fist chapter"
}];
var headings = ['When', 'Who', 'Description'];
for (let i = 0; i <10; i++) {
 let i = 'seven';
 console.log(i);
}
console.log('eight');
for (var i = 0; i < 3; i++) {
 setTimeout(function() {
  console.log(i);
 },10);
}
// 依次打印 3 3 3
 
for (let i = 0; i <3; i++) {
 setTimeout(function() {
  console.log(i);
 },10);
}
// 依次打印，为啥呢 0 1 2 
function hoistVariable() {
    var foo;
    console.log('foo:', foo); // foo: undefined
    foo = 3;
}

hoistVariable();

function hoistVariable() {
    console.log('foo:', foo); // foo: undefined
    var foo = 3;
}

hoistVariable();

console.log(c, l, v);
// 报错
// Uncaught ReferenceError: c1 is not defined
  
const c = 'c1';
let l = 'l1';
var v = 'v1';
let y =88;
function foo ( x ) {
 
 let y ;
 
 if ( x === 1 ) {
 
 y = 2 ;
 
 }
 
 console.log ( y ) ;
 
 }
 
 foo ( ) ;
 
 console.log ( y ) ;
 //函数组件
 function Welcome (props){
  const sayHi = () => {
    alert(`Hi ${props.name}${props.age}`);
  }

  return (
    <div>
      <h1>Hello, {props.name}{props.age}</h1>
      <Button onClick ={sayHi}>Say Hi</Button>
    </div>
  )
}
 
//class 类组件
class Welcome2 extends React.Component {
  constructor(props) {
    super(props);
   this.sayHi = this.sayHi.bind(this);//绑定
   this.say = this.sayHii.bind(this);
  }

  sayHi() {
  alert(`Hi ${this.props.name}${this.props.age}`);
  }
sayHii() {
  alert(`Hi ${this.props.name}${this.props.age}`);
  }
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}{this.props.age}</h1>
        <Button onClick ={this.sayHi}>Say Hi</Button>
		<Button onClick ={this.say}>Say Hi</Button>
      </div>
    )
  } 
}
//stateless
const SimpleComponent = ({text,onClick}) => (
    <div onClick={onClick}>
       Your text is {text}. Click to say.
    </div>
)
//原谅我不能写出更简单的案例了，`ES6 Classes`的写法就是会复杂些
class SimpleComponent2 extends React.Component {

  //这个是构造函数，绑定事件，初始化state
  constructor() {
    super();
    this.state = {
      text: 'say something!'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //上面那个函数的实现
  handleClick() {
    this.setState({liked: !this.state.liked});
  }

  //熟悉的render
  render() {
	  var text = this.state.liked ? '喜欢' : '不喜欢'; 
    return (
      <div onClick={this.handleClick}>
        Your text is {text}. Click to say.
      </div>
    );
  }
}

//函数组件 直接return
function HelloComponent (props ) {	
	return (
	<div className="flex-container">
	<div className="sub-title">Basic</div>
    <Flex>
      <Flex.Item>{props.name}</Flex.Item>
    </Flex>
	 <Flex>
      <Flex.Item>{props.context}</Flex.Item>
    </Flex>
	 <Item>{props.name}</Item>
    <WhiteSpace size="lg" />
	</div>
	)
	
}

class Heading  extends React.Component{
	render(){
		return (
		<th>{this.props.heading}</th>
		);
	}
}

class  Headings extends React.Component{
  render() {
    var headings = this.props.headings.map(function(name) {
      return <Heading heading = {name}/>;
    });
    return <thead><tr>{headings}</tr></thead>;
  }
}

class Row extends React.Component{
  render() {
    return <tr>
      <td>{this.props.changeSet.when}</td>
      <td>{this.props.changeSet.who}</td>
      <td>{this.props.changeSet.description}</td>
    </tr>;
  }
}

class Rows extends React.Component{
  render() {
    var rows = this.props.changeSets.map(function(changeSet) {
    return(<Row changeSet = {changeSet}/>);
    });
    return <tbody>{rows}</tbody>;
  }
}

class App extends React.Component{
	constructor(props) {
    super(props);  
    // this.login = this.login.bind(this);
}

login(a,b,c) {
    console.log(this);//打印null,这是react最常见的坑，this本来指向window，但是经过react初始化之后，指向了null;
    console.log(a);//打印Proxy对象：Proxy里面可以获得dom元素
    console.log(b);//打印event
    console.log(c);
}


  render() {
  return <table className = 'table'>
    <Headings headings = {this.props.headings} />
    <Rows changeSets = {this.props.changeSets} />
	<Button onClick={this.login} />
	<Welcome name="mary" age="18"/>
    </table>;
  }
}

class Header extends React.Component { 
 
goBack (){  
alert("goback");
    window.history.go(-1);  
}  
    render() {
		
         var styleDiv = {  
            width:'100%',  
            height:'70px',  
           lineHeight:'70px'  
        }  
        var styleImg = {  
           marginLeft:'10px',  
           marginRight:'10px'  
        }  
  
        return (  
            <div style={styleDiv}>  
                <a href="#" onClick={()=>this.goBack()} >  
                    <img src="./images/back.png" style={styleImg}/>  
                </a>  
            </div>  
        )  
    }  
}  
 //中间表单  
class Content extends React.Component{  
  
    constructor(props){  
        super(props);  
        this.state = {  
        telError:null,  
        passwordError:null,  
        imageShow:true  
        }  
  
    }  
    //手机号判断  
    telCheck(event){  
        this.tel=event.target.value  
        console.log(this.tel)  
        var reg=/^1[34578]\d{9}$/;  
        if(reg.test(this.tel)==false){  
            this.setState({  
               telError:"请输入正确的手机号"  
            })  
        }else{  
            this.setState({  
                telError:""  
            })  
        }  
  
    }  
    //密码判断  
    passwordCheck(event){  
        this.password=event.target.value  
        var reg=/^\w{6,20}$/;  
        if(reg.test(this.password)==false){  
            this.setState({  
                passwordError:"密码为6-20位数字或字母或下划线!"  
            })  
        }else{  
            this.setState({  
                passwordError:""  
            })  
            }  
  
    }  
    //是否记住密码  
    isRemember(){  
        this.setState({  
            imageShow:!this.state.imageShow  
        })  
    }  
render () {  
    var imageSrc=this.state.imageShow?"./images/unSelected.png":"./images/selected.png"  
    var headImg={  
        marginTop:"42px",  
        marginBottom:"44px",  
        position:'relative',  
        left:"50%",  
        marginLeft:"-56px"  
        //textAlign:"center"不识别  
    }  
    var ul={  
        listStyle:"none",  
        margin:"0",  
        padding:"0",  
        display:"block",  
        paddingLeft:"50px",  
        paddingRight:"50px"  
    }  
    var liAll={  
        margin:"0 auto",  
        padding:"0"  
  
  
    }  
    var userTel={  
        margin:"0 auto",  
        padding:"0",  
        display:'block',  
        height:"41px",  
        width:"286px",  
        borderBottom:"1px solid #989898",  
        lineHeight:"52px",  
        paddingTop:"11px"  
    }  
    var userImg={  
        diaplay:"inline-block",  
        width:"30px",  
        marginRight:"6px"  
    }  
    var userSpan={  
        display:"inline-block",  
        border:"1px solid #989898",  
        height:"20px"  
    }  
    var telInput={  
        margin:"0",  
        padding:"0",  
        display:"inline-block",  
        height:"20px",  
        marginBottom:"12px",  
        marginLeft:"12px",  
        outLine:"none",  
        border:"0"  
    }  
    var telPrompt={  
        color:"red",  
        fontSize:"18px"  
    }  
    var unSelected={  
        display:"inline-block",  
        width:"20px",  
        marginTop:"14px",  
        marginRight:"4px"  
    }  
    var rememberLi={  
        display:"block",  
        height:"48px",  
        lineHeight:"48px",  
        clear:"both",  
        margin:"0 auto"  
    }  
    var rememberI={  
        fontStyle:"normal",  
        fontSize:"11px",  
        color:"#3dbf8e",  
        marginLeft:"4px"  
  
    }  
    var forgetI={  
        float:"right",  
        fontStyle:"normal",  
        fontSize:"11px",  
        color:"#3dbf8e",  
        marginBottom:"23px"  
  
    }  
    var login={  
        border:"none",  
        width:"100%",  
        height:"42px",  
        backgroundColor:"#F55D5D",  
        color:"#fff",  
        fontSize:"18px"  
    }  
    return (  
        <div>  
            <img src="./images/headImg.png" alt="" style={headImg}/>  
            <ul style={ul}>  
                <li style={userTel}>  
                    <img src="http://img2.imgtn.bdimg.com/it/u=2644124456,1222741308&fm=27&gp=0.jpg" alt="" style={userImg}/>  
                    <span style={userSpan}></span>  
                    <input type="text" style={telInput} placeholder="请输入手机号" onBlur={(event)=>this.telCheck(event)} />  
                </li>  
                <li style={liAll}>  
                    <span style={telPrompt}>{this.state.telError}</span>  
                </li>  
                <li style={userTel}>  
                    <img src="http://img2.imgtn.bdimg.com/it/u=2644124456,1222741308&fm=27&gp=0.jpg" alt="" style={userImg}/>  
                    <span style={userSpan}></span>  
                    <input type="password" style={telInput} placeholder="请输入密码" onBlur={(event)=>this.passwordCheck(event)}/></li>  
                <li style={liAll}>  
                    <span style={telPrompt}>{this.state.passwordError}</span>  
                </li>  
                <li style={rememberLi}>  
                    <img src="http://img2.imgtn.bdimg.com/it/u=2644124456,1222741308&fm=27&gp=0.jpg" a style={unSelected} onClick={()=>this.isRemember()}/>  
                    <a href="#" style={rememberI}>记住手机号</a><a href="#" style={forgetI}>忘记密码</a>  
                </li>  
                <li style={liAll}>  
                    <button style={login}>登录</button>  
                </li>  
            </ul>  
        </div>  
    )  
}  
 }  
 //底部  
class Footer extends React.Component{  
render(){  
    var register={  
        display:"block",  
        fontSize:"13px",  
        color:"#8b8b8b",  
        width:"80px",  
        height:"25px",  
        margin:"0 auto",  
        border:"1px solid #8b8b8b",  
        textDecoration:"none",  
        marginTop:"50px",  
        textAlign:"center",  
        lineHeight:"25px"  
  
    }  
    return(  
    <a href="#" style={register}>快速注册</a>  
    )  
}  
}  
class InputControlES6 extends React.Component {
    constructor(props) {
        super(props);

        // 设置 initial state
        this.state = {
            text: props.initialValue || 'placeholder'
        };

        // ES6 类中函数必须手动绑定
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        return (
            <div>
                Type something:
                <input onChange={this.handleChange}
               value={this.state.text} />
			   <p>{this.state.text}</p>
            </div>
        );
    }
}
//绑定函数
class BrokenButton extends React.Component {
	constructor(props) {
        super(props);

        // 设置 initial state
        this.state = {
            text: props.initialValue || 'placeholder'
        };
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
    this.setState({ backgroundColor: "red" });
  }
  render() {
    return (
      <button onClick={this.handleClick} style={this.state}>
        Set background to red{this.state.text}
      </button>
    );
  }
  
}
//使用箭头函数
class BrokenButton2 extends React.Component {
  render() {
    return (
      <button onClick={()=>{this.handleClick()} } style={this.state}>
        Set background to red
      </button>
    );
  }

  handleClick() {
    this.setState({ backgroundColor: "red" });
  }
}
//多个属性
var obj = {
        name: "jason",
        num : 28,
		age:18,
      }

      function Welcome(props) {  
        return  <h1> {props.name} {props.num}{props.age}</h1>  
      }

class Clock extends React.Component {

        constructor(props){
          super(props);
          this.state = {date: new Date()}  // 给组件添加状态
        }
        
        // 更改状态
        tick() {
          this.setState({
            date: new Date()
          })
        }
        // 生命周期函数
        componentDidMount () {
          this.timerId = setInterval(
            () => this.tick()
          , 1000)
        }

        render() {
          return (
            <div>
              <h1>Hello World!</h1>
              <h2>现在是{this.state.date.toLocaleTimeString()} </h2>
            </div>
          )
        }
      }
	  
export default class All extends React.Component{  
  render () {  
      return (  
          <div>  
              <Header></Header>  
              <Content></Content>  
              <Footer></Footer>  
			  <App headings = {headings} changeSets = {data} />
			 <SimpleComponent text="hi" onClick={()=>{<Content/>,alert("ss")} }/>
			  <SimpleComponent2/>
			  <HelloComponent name="hello"  context="are you ok"/>
			  <InputControlES6 />
			  <BrokenButton />
			  <BrokenButton2/>
			   <Welcome {...obj}/>
			   <Clock/>,
          </div>
      );  
  }  
} */