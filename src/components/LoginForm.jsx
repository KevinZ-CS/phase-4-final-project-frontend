import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Row } from 'react-bootstrap';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    return(
     <>
    <Container className="successmargins">
     
        <Row>
        <div className="col-md-4"></div>
    <Form className="col-md-4">

{/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
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


{/* <div className="text-center mb-4 mt-4">
  <a id='pw' href="#">Forgot Password?</a>
</div> */}

<hr className="mt-0" />



<div id='login' className="text-center mb-3">
  <button className="btn btn-dark" type="submit" >Sign In</button>
</div>

<div id="acc" className="text-center mb-3">
<span>New to Game World? </span>
{/* <NavLink to='/signup' className='no-style' onClick={handleClose}>Create Account</NavLink> */}
</div>
</Form>
</Row>
    </Container>
     
    </>
    )
}

export default LoginForm