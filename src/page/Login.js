import React, { Component } from 'react'
import '../Style/Login.css'
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import logo from "../picture/LOGO4.png";
import loginBg from '../picture/bglogin-new.png';
import googleLogo from '../picture/google.png';


class LoginPage extends React.Component {

  state = {
    user: {
      brandName: " ",
      brandGoogleId: " AAAAAAA ",
      brandEmail: " ",
    }
  };

  render() {

    const fail = response => {
      console.log('fail')
      console.log(response)
    }

    const success = response => {

      this.setState({
        user: {
          brandName: " ",
          brandGoogleId: response.profileObj.googleId,
          brandEmail: response.profileObj.email,
        }
      })


      axios.post('http://3.92.192.76:8000/checkAdminIsExist/', {
        brandGoogleId: response.profileObj.googleId,
      }).then(res => {
        if (res.data.result) {
          this.props.history.push('/manage', { user: this.state.user })
        } else {
          this.props.history.push('/register', { user: this.state.user })
        }
      })
    }

    return (
      <div img src={loginBg} className="loginBg" >
        {/* <div className="logo-header"><img src={logo} className="logo-png"/></div> */}
          <GoogleLogin
            clientId="823575915718-q03nd85afligp8r3n9g2694mll5ncqcp.apps.googleusercontent.com"
            render={renderProps => (
                <button className="loginGoogle" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                  <img src={googleLogo} className="googleLogo-png"/>
                  <div className="SeparatorLine1"></div>
                  <p className="fontStyle">Login with Google</p>
                </button> 
                
            )}
            buttonText="Login"
            onSuccess={success}
            onFailure={fail}
            cookiePolicy={'single_host_origin'}
          />

           {/* <p>{this.state.user.brandGoogleId}</p>  */}
        </div>



        
    );
    
  }
}

export default LoginPage;
