import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Row } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
  

    async function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        const response = await fetch('/login', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
        const data = await response.json();
        if (response.ok) {
          console.log('ok')
          console.log(data)
             onLogin(data);
            } else {
             setErrors(data.errors);
            console.log('not ok')
            console.log(data)
            }
          }
    
    return(
     <>
    <Container className="successmargins">
     
    <Row>
      <div className="col-md-4"></div>
      <Form className="col-md-4" onSubmit={handleSubmit} >

      <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
        <Form.Control
          type="text"
          placeholder="Username"
          autoFocus
          className="shadow-none login-input"
          autoComplete="off"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
      />
       </Form.Group>

       <Form.Group className="mb-0" controlId="exampleForm.ControlInput2">
         <Form.Control
          type="password"
          placeholder="Password"
          className="shadow-none login-input"
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        </Form.Group>

        <p className={errors ? "errmsg" : "offscreen"} aria-live="assertive">{errors}</p>

        <br />

        <div id='login' className="text-center mb-3">
        <button className="btn btn-dark" type="submit" >Sign In</button>
        </div>

        <div id="acc" className="text-center mb-3">
        <span>New to Game World? </span>
        <NavLink to='/signup'>Create Account</NavLink>
        </div>
        </Form>
    </Row>
    </Container>
    </>
    )
}

export default LoginForm