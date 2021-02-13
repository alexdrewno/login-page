import './App.css';
import React, { useState } from 'react';


function App() {
  const [title, setTitle] = useState("Login");
  const [curPage, setCurPage] = useState("Login");
  const [loginButtonText, setLoginButtonText] = useState("Login");
  const [signupButtonText, setSignupButtonText] = useState("Signup");
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [confirmPasswordText, setConfirmPasswordText] = useState("");

  const forgotPasswordPressed = () => {
    setCurPage("ForgotPassword");
    setTitle("Forgot Password");
    setLoginButtonText("Confirm");
    setSignupButtonText("Back to Login");
  };

  const signupButtonPressed = () => {
    if (title === "Login") {
      renderSignup();
    } else {
      renderLogin();
    }
  };

  const loginButtonPressed = () => {
    if (curPage === "Login") {
      if (emailText !== "" && passwordText !== "") {
        alert('Ok!');
      } else {
        alert('Please enter an email and password');
      }
    } else if (curPage === "Signup") {
      if (emailText !== "" && passwordText !== "" && confirmPasswordText !== "") {
        if (confirmPasswordText === passwordText) {
          alert('Ok!');
        } else {
          alert('Password and confirm password are different');
        }
      } else {
        alert('Please fill out all fields');
      }
    }
  };

  const renderSignup = () => {
    setCurPage("Signup");
    setTitle("Signup");
    setLoginButtonText("Create Account");
    setSignupButtonText("Back to Login");
  };

  const renderLogin = () => {
    setCurPage("Login");
    setTitle("Login");
    setLoginButtonText("Login");
    setSignupButtonText("Signup");
  };

  const renderHeader = () => (
    <div>
      <div>
        <h1 className="LoginHeader">{title}</h1>
        <p className="LoginSubtitle">{title}</p>
      </div>
    </div>
  );

  const renderBody = () => (
    <div>
      <div>
        <p> University </p>
        <select className="SelectContainer">
          <option value="UIUC">UIUC</option>
          <option value="Purdue"> Purdue </option>
          <option value="Harvard"> Harvard </option>
        </select>

        {/* Email Field */}
        <p> Email </p>
        <input
          className="InputContainer"
          placeHolder="Your Email"
          value={emailText}
          onChange={(e) => setEmailText(e.target.value)}
        />

        {/* Password Field */}
        {curPage !== "ForgotPassword" &&
          (<div><p> Password </p>
            <input
              className="InputContainer"
              placeHolder="Your Password"
              type="password"
              value={passwordText}
              onChange={(e) => setPasswordText(e.target.value)}
            />
          </div>)}

        {/* Confirm Password Field */}
        {curPage === "Signup" &&
          (<div><p> Confirm Password </p>
            <input
              className="InputContainer"
              placeHolder="Confirm Password"
              type="password"
              value={confirmPasswordText}
              onChange={(e) => setConfirmPasswordText(e.target.value)}
            />
          </div>)}
      </div>

      {/* Forgot Passowrd Field*/}
      {curPage !== "ForgotPassword" &&
        (<div className="RowContainer">
        <button
          className="ForgotPasswordButton"
          onClick={forgotPasswordPressed}
        > Forgot password? </button>
        </div>)}

    </div>
  );

  const renderBottom = () => (
    <div className="RowContainer CenterContainer">
      {/* Signup Button */}
      <button
        className="RoundedButton"
        id="signup-button"
        onClick={signupButtonPressed}>
        {signupButtonText}
      </button>

      {/* Login Button */}
      <button
        className="RoundedButton"
        id="login-button"
        onClick={loginButtonPressed}
        >
        {loginButtonText}
      </button>
    </div>
  );

  return (
    <div className="Container">
      <div className="LoginSection">
        {renderHeader()}
        {renderBody()}
        {renderBottom()}
      </div>
    </div>
  );
}

export default App;
