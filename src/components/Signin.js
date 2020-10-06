import React, { Component } from "react";
import {signInWithGoogle} from "../firebase"

class Signin extends Component {
  render() {
    return (
      <div className="signin-form">
        <h1>Sign In/Sign Up</h1>
        <button className="btn basic-btn" onClick={signInWithGoogle}>
          <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-2" alt="pic"/>
          Signin with Google</button>
          <div style={{ textAlign:'center' ,fontSize:13 }}>OR</div>

          <button className="btn basic-btn" onClick={signInWithGoogle}>
          <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-2" alt="pic"/>
          Sign up with Google</button>
      </div>
    );
  }
}
export default Signin;
