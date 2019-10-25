import React from 'react';
import {GoogleLogin} from 'react-google-login';

const success = response => {
    console.log(response) // eslint-disable-line
  }


class Index extends React.Component {
    
    state = {
        collapsed: false,
    }
    
    
    render() {
        
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
            </div>
        );
    }

}
export default Index;
