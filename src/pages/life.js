/**import React from 'react';
import ReactDOM from 'react-dom';
import { List, Checkbox, Flex } from 'antd-mobile';
import Zmdeng from './Carousel';

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

class Life  extends React.Component {
  onChange = (val) => {
    console.log(val);
  }
  
  render() {
    const data = [
      { value: 0, label: 'Ph.D.' },
      { value: 1, label: 'Bachelor' },
      { value: 2, label: 'College diploma' },
    ];
    return (<div>
	   <Zmdeng />
    </div>);
  }
}
export default Life ;
*/