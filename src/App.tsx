import * as React from 'react';

import { Anchor,Avatar,Layout,Menu } from 'antd';

import './App.css';
import img from './personHead.jpg';
const { Link } = Anchor;
const { Header, Content } = Layout;
class App extends React.Component {
  
  public render() {
    return (
      
      <Layout>
       
        <Header style={{ position: 'fixed', zIndex: 99, width: '100%' }}>
          <Avatar size={40} src={img} className="logo" />
          <Anchor>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px',textAlign:'center' }}
            >
              <Menu.Item key="1">
                <Link href="#partOne" title="首页" />
              </Menu.Item>
              <Menu.Item key="2">
                <Link href="#partTwo" title="个人介绍" />
              </Menu.Item>
              <Menu.Item key="3">
                <Link href="#partThree" title="工作生活" />
              </Menu.Item>
              <Menu.Item key="4">
                <Link href="#partFour" title="未来憧憬" />
              </Menu.Item>
            </Menu>
          </Anchor>
        </Header>
        <Content style={{ height:'100%' }} >
           <div className={'bg'}>
            a
           </div>
           {/* <div className={'bird'}>
            bird
           </div> */}

           <div id='partOne' className={'allShow'}>
              <div className={'partOne'} data-aos="fade-down"  data-aos-duration='800' >
                  欢迎来到我的网站
              </div>
              <div className={'red2'} data-aos="fade-up" data-aos-delay='500'  data-aos-duration='1000'>
                  WeCome To My Website
              </div>
           </div>
           
           <div id='partTwo' className={'allShow'} >
              <div className={'partOne'} data-aos="fade-up-right" data-aos-anchor-placement='top-center' data-aos-duration='700' data-aos-easing='ease-in-out-sine' >
                  啦啦啦~~
              </div>
           </div>

           <div id='partThree' className={'partThree allShow'} >

              <div className={'partOne'} data-aos="fade-down" data-aos-offset="200"   data-aos-duration='1000' >
                  欢迎来到我的网站
              </div>
              <div className={'red2'} data-aos="fade-up"  data-aos-delay="500" data-aos-duration='1500' >
                  WeCome To My Website
              </div>

           </div>

           <div id='partFour' className={' partFour allShow'} >
           
              <div className={'partOne'} data-aos="zoom-in" data-aos-offset="200"   data-aos-duration='1000' >
                  欢迎来到我的网站
              </div>
              <div className={'red2'} data-aos="fade-up"  data-aos-delay="500" data-aos-duration='1500' >
                  WeCome To My Website
              </div>
              
           </div> 

        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer> */}
      </Layout>
    );
  }
}

export default App;
