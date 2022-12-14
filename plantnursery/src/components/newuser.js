import React, { useState } from 'react'
import '../App.css';
import { useNavigate } from "react-router-dom";

function App(props) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const triggerCreateUser = (event) => {
    event.preventDefault()
    let userObj = {
      username: username,
      password: password
    }
    props.handleCreateUser(userObj)
  }

  const handleHaveAccountClick = () => {
    navigate("/login");
  };

  return (
    <div className='formContainer'>
      <h1 className='formTitle'>Create an Account</h1>
      <form onSubmit={triggerCreateUser} className='inputForm'>
        <input type='text' placeholder='username' className='textInput' onChange={(event)=> {setUsername(event.target.value)}}/>
        <input type='password' placeholder='password' class='textInput' onChange={(event)=> {setPassword(event.target.value)}}/>
        {props.toggleError ?
          <h5 class='errorMsg'>{props.errorMessage}</h5>
          :
          null
        }
        <input type='submit' value='Register' className='submitBtn'/>
      </form>
      <button onClick={handleHaveAccountClick} className="accountBtn">
        Already have an account?
      </button>
    </div>
  );
}

export default App;