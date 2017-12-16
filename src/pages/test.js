import React from 'react';
import ReactDOM from 'react-dom';
class MyComp extends React.Component {
    componentDidMount() {
      this.timeoutId = setTimeout(() => {
        window.location.href = "https://mobile.ant.design/components/button-cn/"
      }, 3000)
    }
  
    // componentWillUnmount() {
    //   clearTimeout(this.timeoutId)
    // }
  
    render() {
      return (<div>ss</div>)
    }
  }
  export default MyComp;