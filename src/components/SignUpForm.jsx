import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Row } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

function SignUpForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventdefault()
    }

    return (
        <>
         <Container className="successmargins">
     
     <Row>
       <div className="col-md-4"></div>
       <Form className="col-md-4" onSubmit={handleSubmit} >
 
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
 
        <Form.Group className="mb-2" controlId="exampleForm.ControlInput2">
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

         <Form.Group className="mb-0" controlId="exampleForm.ControlInput2">
          <Form.Control
           type="password"
           placeholder="Password Confirmation"
           className="shadow-none login-input"
           autoComplete="off"
           onChange={(e) => setPasswordConfirmation(e.target.value)}
           value={passwordConfirmation}
           required
         />
         </Form.Group>
 
         <br />
 
         <div id='login' className="text-center mb-3">
         <button className="btn btn-dark" type="submit" >Create Account</button>
         </div>
 
     
         </Form>
     </Row>
     </Container>
        
        </>
    )
}

export default SignUpForm