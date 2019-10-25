import React from 'react';
import {GoogleLogin} from 'react-google-login';
import axios from 'axios';




class Index extends React.Component {
    
    state = {
        user:{
            brandName: " ",
            brandGoogleId: " AAAAAAA ",
            brandEmail: " ",
        }
    }
    
    
    render() {

        const success = response => {
            console.log(response)
            this.setState({
                user:{
                    brandName: " ",
                    brandGoogleId: response.profileObj.googleId,
                    brandEmail: response.profileObj.email,
                }
            })

            axios.post('http://localhost:8000/checkAdminIsExist/', {
                brandGoogleId: response.profileObj.googleId,
            }).then(res => {
                if(res.data.result){
                    this.props.history.push('/main',{user: this.state.user})
                }else{
                    this.props.history.push('/register',{user: this.state.user})
                }
            })  
        }
        
        return (
            <div>
                <GoogleLogin
                    clientId="823575915718-5qtptev11khljqglhhe126a8vf65e40g.apps.googleusercontent.com"
                    render={renderProps => (
                        <p onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</p>
                    )}
                    buttonText="Login"
                    onSuccess={success}
                    cookiePolicy={'single_host_origin'}
                />

                <p>{this.state.user.brandGoogleId}</p>
            </div>

        );
    }

}
export default Index;
