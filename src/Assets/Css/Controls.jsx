import React from "react";
import "../Css/Home.css";

export default function Controls(props) {
  const Change = props.Change;
  const changeable = props.changeable;
  return (
    <div>
      <div className="buttons">
        {/* sign in & sign up */}
        <div>
          <button 
          onClick={() => changeable("SignIn")} 
          className="signin-btn"
          style={{color: Change === "SignUp" ? "#707070" : "#129B2E"  }}

          
          >
            SIGN IN
          </button>
          <button 
          onClick={() => changeable("SignUp")} 
          className="signup-btn"
          style={{color: Change === "SignIn" ? "#707070" : "#129B2E"}}
          >
            SIGN UP
          </button>
          {/* <SignIn /> */}
          {/* <SignUp /> */}
        </div>
      </div>
    </div>
  );
}
