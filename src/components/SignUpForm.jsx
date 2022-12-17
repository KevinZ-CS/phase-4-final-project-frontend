import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Row } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

function SignUpForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);

    async function handleSubmit(e) {
        e.preventDefault();
        setErrors([])
        const response = await fetch('/signup', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password, password_confirmation }),
        })
        const data = await response.json();
        if (response.ok) {
            console.log('ok')
            console.log(data)
            //  onLogin(data);
            } else {
                console.log('not ok')
                console.log(data)
             setErrors(data.errors);
            }
          }
    

    return (
        <>
         <Container className="successmargins">
     
     <Row>
       <div className="col-md-4"></div>
       <Form className="col-md-4" onSubmit={handleSubmit} >
 
       <Form.Group className="mb-2" controlId="exampleForm.ControlInput3">
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
 
        <Form.Group className="mb-2" controlId="exampleForm.ControlInput4">
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

         <Form.Group className="mb-0" controlId="exampleForm.ControlInput5">
          <Form.Control
           type="password"
           placeholder="Password Confirmation"
           className="shadow-none login-input"
           autoComplete="off"
           onChange={(e) => setPasswordConfirmation(e.target.value)}
           value={password_confirmation}
           required
         />
         </Form.Group>

         <p className={errors ? "errmsg" : "offscreen"} aria-live="assertive">{errors}</p>
 
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