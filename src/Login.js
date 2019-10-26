<<<<<<< Updated upstream
import {
  Layout,
  Menu,
  Breadcrumb,
  Row,
  Col,
  Form,
  Icon,
  Input,
  Button,
  Checkbox
} from "antd";
import React, { Component } from "react";
import "./App.css";
import logo2 from "./LOGO.png";
import background from "./bglogin-new.png";
import { NavLink } from "react-router-dom";
=======
import { Layout, Menu, Breadcrumb, Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';
import React, { Component } from 'react'
import './App.css'
import logo2 from './LOGO.png'
import { Link, NavLink, BrowserRouter as Router } from "react-router-dom";

>>>>>>> Stashed changes
const { Header, Footer, Sider, Content } = Layout;

class Login extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

<<<<<<< Updated upstream
  render() {
    return (
        <Layout>
          <div className="header">
            <Row className="row1">
              <Col span={24}></Col>
            </Row>
            <Row className="row2">
              <Col span={6}></Col>
              <Col span={12}>
                <img src={logo2} style={{ height: 100 }} />
              </Col>
              <Col span={6}></Col>
            </Row>
            <Row className="row3">
              <Col span={24}></Col>
            </Row>
            <Row className="row4">
              <Col span={8}></Col>
              <Col span={8}>
                <div className="login-box">
                  <Input
                    className={"usernameInput"}
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Username"
                  />
                  <br></br>
                  <Input
                    className={"passwordInput"}
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                  <br></br>
                  <Checkbox className={"remember"}>Remember me</Checkbox>
                  <a className="login-form-forgot" href="">
                    Forgot password
                </a>
                  <br></br>
                  <Button type="primary" className="login-form-button">
                    Log in
                </Button>
                  <br></br>
                  <div className={"register"}>
                    Or
                  <NavLink to="/register">
                      <a className={"register-link"}>register now!</a>
                    </NavLink>
                  </div>
                </div>
              </Col>
              <Col span={8}></Col>
            </Row>
            <Row className="row5">
              <Col span={24}></Col>
            </Row>
          </div>
        </Layout>
    );
  }
=======
    render() {
        return (
            <Router>
            <Layout>
                <div className="header">
                    <Row className="row1">
                        <Col span={24}></Col>
                    </Row>
                    <Row className="row2">
                        <Col span={6}></Col>
                        <Col span={12}>
                            <img src={logo2} style={{height: 100}} />
                        </Col>
                        <Col span={6}></Col>
                    </Row>
                    <Row className="row3">
                        <Col span={24}></Col>
                    </Row>
                    <Row className="row4">
                        <Col span={6}></Col>
                        <Col span={12}>
                            <div className="login-box">
                                <Input
                                    className={"usernameInput"}
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />
                                <br></br>
                                <Input
                                    className={"passwordInput"}
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />
                                <br></br>
                                <Checkbox className={"remember"}>Remember me</Checkbox>
                                <a className="login-form-forgot" href="">
                                    Forgot password
                                </a>
                                <br></br>
                                <Button type="primary" className="login-form-button">
                                    Log in
                                </Button>
                                <br></br>
                                <div className={"register"}>
                                    Or <NavLink to="/Register">register now!</NavLink>
                                </div>
                                
                            </div>
                        </Col>
                        <Col span={6}></Col>
                    </Row>
                    <Row className="row5">
                        <Col span={24}></Col>
                    </Row>
                </div>
            </Layout>
            </Router>

        );
    }

>>>>>>> Stashed changes
}
export default Login;
