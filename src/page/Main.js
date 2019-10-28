import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React, { Component } from 'react'
import Logo from '../picture/logo.svg';
import logo2 from '../picture/LOGO-new.png'
import '../Style/Main.css'
import DrawerEdit from './DrawerEdit';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {


  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <div className="logo">
            <img src={logo2} className="Logo" />
          </div>
          
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="home" />
              <span><a href="/">Home</a></span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="check-circle" />
                  <span>Approve</span>
                </span>
              }
            >
              <Menu.Item key="3">Top</Menu.Item>
              <Menu.Item key="4">Pants</Menu.Item>
              <Menu.Item key="5">Skirt</Menu.Item>
              <Menu.Item key="6">Jacket</Menu.Item>
              <Menu.Item key="7">Dress</Menu.Item>
              <Menu.Item key="8">Shoes</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="edit" />
                  <span>Manage</span>
                </span>
              }
            >
              <Menu.Item key="9">Top</Menu.Item>
              <Menu.Item key="10">Pants</Menu.Item>
              <Menu.Item key="11">Skirt</Menu.Item>
              <Menu.Item key="12">Jacket</Menu.Item>
              <Menu.Item key="13">Dress</Menu.Item>
              <Menu.Item key="14">Shoes</Menu.Item>
            </SubMenu>
            <Menu.Item key="15">
              <Icon type="logout" />
              <span><a href="/">logout</a></span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>

          {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout>
      </Layout>
    );
  }
}
export default SiderDemo;
