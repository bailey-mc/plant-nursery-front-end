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
      <h2 className='formTitle'>Create An Account</h2>
      <div className='create-form-container'>
      <form className='inputForm' onSubmit={triggerCreateUser}>
        <input type='text' placeholder='username' className='textInput' onChange={(event)=> {setUsername(event.target.value)}}/>
        <input type='password' placeholder='password' class='textInput' onChange={(event)=> {setPassword(event.target.value)}}/>
     
        {props.toggleError ?
          <h5 class='errorMsg'>{props.errorMessage}</h5>
          :
          null
        }
        <input type='submit' value='Register' className='submitBtn'/>
      </form>
      <button className='button' onClick={handleHaveAccountClick}>
        Already have an account?
      </button>
      </div>
    </div>
  );
}

export default App;