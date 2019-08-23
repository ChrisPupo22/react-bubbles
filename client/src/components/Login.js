import React, { useState } from "react";
import Axios from 'axios'; 



const Login = ({ history }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const handleChange = event => {
    setCredentials({...credentials, [event.target.name]: event.target.value});
    

  };
  
  const handleSubmit = event => {
    event.preventDefault();
    console.log(credentials)
    Axios.post('http://localhost:5000/api/login', credentials)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.payload);
      history.push("/bubble-page")
      
    })
    .catch(err => console.log(err.response))
  }

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" 
          name="username" 
          placeholder="username" 
          onChange={handleChange} 
          value={credentials.username}  
          />
          <input type="password" 
          name="password" 
          placeholder="password" 
          onChange={handleChange} 
          value={credentials.password} 
          />
          <button type="submit">Log In</button>
        </form>
    </>
  );
};

export default Login;
