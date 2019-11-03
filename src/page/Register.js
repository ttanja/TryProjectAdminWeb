import React from 'react';
import { Button } from 'antd';
import axios from 'axios';

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
            <div>
                <p>Input the brand name: <input type='text' onChange={this.handleChange.bind(this)}/></p>
                <Button onClick={() => this.createBrand()}> Press Me !</Button>
                <p>{this.state.brandName}</p>
            </div>

        );
    }

}
export default Register;
