import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function App(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault()
    const loginInfo = {
      username: username,
      password: password,
    }
    axios
      .put("https://ancient-lowlands-69118.herokuapp.com/users/login", loginInfo)
      .then((response) => {
        if (response.data.username) {
          console.log(response);
          // setToggleError(false);
          // setErrorMessage("");
          props.setCurrentUser(response.data);
          navigate('/')
        } else {
          console.log(response);
          // setToggleError(true);
          // setErrorMessage(response.data);
        }
      });
  };

  const handleCreateUserClick = () => {
    navigate("/createaccount");
  };

  return (
    <div className="formContainer">
      <h2 className="formTitle">Log In</h2>
      <div className="login-form-container">
      <form className="inputForm" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="username"
          className="textInput"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          className="textInput"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        {props.toggleError ? (
          <h5 className="errorMsg">{props.errorMessage}</h5>
        ) : null}
        <input type="submit" value="Login" className="submitBtn" />
      </form>
      <button className="button" onClick={handleCreateUserClick}>
        Create an account
      </button>
      </div>
      
    </div>
  );
}

export default App;
