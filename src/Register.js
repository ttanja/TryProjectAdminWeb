import { Layout, Menu, Breadcrumb, Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';
import React, { Component } from 'react'
import './App.css'
import logo2 from './LOGO.png'
import {GoogleLogin} from 'react-google-login';

const { Header, Footer, Sider, Content } = Layout;


const success = response => {
    console.log(response) // eslint-disable-line
  }

    


class Login extends React.Component {
    
    state = {
        collapsed: false,
    }
    
    
    render() {
        
        return (
            <div>
            <GoogleLogin
            clientId="823575915718-5qtptev11khljqglhhe126a8vf65e40g.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={success}
            cookiePolicy={'single_host_origin'}/>

<GoogleLogin
    clientId="823575915718-5qtptev11khljqglhhe126a8vf65e40g.apps.googleusercontent.com"
    render={renderProps => (
      <p onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</p>
    )}
    buttonText="Login"
    onSuccess={success}
    cookiePolicy={'single_host_origin'}
  />

          <p>{this.props.googleId}</p></div>
        );
    }

}
export default Login;
