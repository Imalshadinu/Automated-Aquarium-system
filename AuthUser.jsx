import React from "react";
import routes from "routes.js";
import Login from "views/examples/Login.jsx";

import fire from "config/Fire.jsx";
import Profile from "views/examples/Profile.jsx";

class AuthUser extends React.Component {

    constructor(props){
       super(props);
       this.state={
         user:{},
       }
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
          if(user){
            this.setState({user});
          }else{
            this.setState({user:null});
          }
        
    
        });
      }

    render() {
    return (
    <>
       <div>
         {this.state.user ? (<Profile />) : (<Login />)}
       </div>
    </>
    );
  }

}

export default AuthUser;