import React from 'react';
import { Button } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Style/Login.css'
import loginBg from '../picture/bglogin-new.png';


class Register extends React.Component {
    
    state = {
        user: this.props.location.state.user,
    }

    componentDidMount(){
        
    }

    createBrand(){
        axios.post('http://3.92.192.76:8000/createBrand/', {
            brandName: this.state.brandName,
            brandGoogleId: this.state.user.brandGoogleId,
            brandEmail: this.state.user.brandEmail
        }).then(res => {
            console.log(res)
            //this.props.history.push('/register',{user: this.state.user})
        })
    }

    handleChange(event){
        this.setState({brandName: event.target.value})
    }
    
    
    render() {
        
        return (
            <div img src={loginBg} className="loginBg" >
            <div style={{marginTop:300}}>
                <div style={{color: "#d5d5d5",marginRight:10,fontSize:"20"}} >INPUT THE BRAND NAME :  <input type='text' onChange={this.handleChange.bind(this)}/></div>
                <Link to="/"><Button style={{marginTop: 10,marginLeft:100}} onClick={() => this.createBrand()}> PRESS ME !</Button></Link>
                <p>{this.state.brandName}</p>
            </div>
            </div>
            

        );
    }

}
export default Register;
