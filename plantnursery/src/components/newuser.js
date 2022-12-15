import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function App(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleCreateUser = (event) => {
    event.preventDefault();
    const userInfo = {
      username: username,
      password: password,
    };
    axios
      .post(
        "https://ancient-lowlands-69118.herokuapp.com/users/createaccount",
        userInfo
      )
      .then((response) => {
        if (response.data.username) {
          console.log(response);
          props.setToggleError(false);
          props.setErrorMessage("");
          props.setCurrentUser(response.data);
          navigate("/");
        } else {
          props.setErrorMessage(response.data);
          props.setToggleError(true);
        }
      });
  };

  const handleHaveAccountClick = () => {
    navigate("/login");
  };

  return (
    <div className="formContainer">
      <h2 className="formTitle">Create An Account</h2>
      <div className="create-form-container">
        <form className="inputForm" onSubmit={handleCreateUser}>
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
            class="textInput"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />

          {props.toggleError ? (
            <h5 class="errorMsg">{props.errorMessage}</h5>
          ) : null}
          <input type="submit" value="Register" className="submitBtn" />
        </form>
        <button className="button" onClick={handleHaveAccountClick}>
          Already have an account?
        </button>
      </div>
    </div>
  );
}

export default App;
