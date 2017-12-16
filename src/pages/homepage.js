import React from 'react';
import ReactDOM from 'react-dom';
import { TabBar } from 'antd-mobile';
import Life from './life.js';
import My from './my.js';
import Friend from './friend.js';//Module not found: Can't resolve './pages/friend.js' in 'D:\aa\antm-demo\src\pages' lujin problem 
import Koubei from './koubei.js';
import Ohter from './other';
import Zmdeng from './Carousel';
import MyComp from './test';
class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
     
    };
  }

  renderContent(pageText) {
    return (
      <div >
        <div style={{ paddingTop: 30 }}>{pageText}</div>
      </div>
    );
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}> {/*/fullScreen show */ }
		  {/*//TabBar 位于 APP 底部，方便用户在不同功能模块之间进行快速切换。*/}
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="Life"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            badge={2}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            {this.renderContent(<Life/>)}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="Koubei" 
            key="Koubei"
          //  badge={'new'}
            selected={this.state.selectedTab === 'red2Tab'}
            onPress={() => {
              this.setState({
                selectedTab: 'red2Tab',
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent(<Koubei/>)} {/*//why koubei show first */}
          </TabBar.Item>
          <TabBar.Item
		  //默认展示图片
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }//选中后的展示图片
            selectedIcon={  
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="Friend"  
            key="Friend"
           // dot  show xiaoshudian
            selected={this.state.selectedTab === 'greenTab'}//is selected or not 
            onPress={() => { //点击触发 
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
		  data-seed="logId2"
          >
            {this.renderContent(<Friend/>)}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="My"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
		   data-seed="logId3"
          >
            {this.renderContent(<My/>)}
          </TabBar.Item>
       
		 <TabBar.Item
		   badge={'空'}
            icon={{ uri: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1908902040,335378809&fm=27&gp=0.jpg' }}
            selectedIcon={ <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512645243842&di=3518d3c59ad4bf15967cfcb76a35fa28&imgtype=0&src=http%3A%2F%2Fpic27.nipic.com%2F20130320%2F9980997_125659737000_2.jpg) center center /  21px 21px no-repeat' }}
              />}
            title="Ohter"
            key="Ohter"
            selected={this.state.selectedTab === 'whiteTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'whiteTab',
              });
            }}
			 data-seed="logId4"
          >
            {this.renderContent(<MyComp/>)}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Homepage;