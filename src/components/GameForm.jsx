import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Row, Button } from 'react-bootstrap';
import { NavLink, useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";

function GameForm({ user, onLogin }) {
    const [title, setTitle] = useState('');
    const [platform, setPlaform] = useState('');
    const [genre, setGenre] = useState('');
    const [img_url, setImg_url] = useState('');
    const [price, setPrice] = useState(0);

    const [errors, setErrors] = useState([]);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        setErrors([])
        const response = await fetch('/games', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                title, platform, genre, img_url, price 
            }),
        })
        const data = await response.json();
        if (response.ok) {
            console.log('ok')
            console.log(data)
            //  onLogin(data);
             history.push(`/`)
            } else {
                console.log('not ok')
                console.log(data)
             setErrors(data.errors);
            }
          }


    return (
    <Container className="successmargins">
    { user ? <Row>
       <div className="col-md-4"></div>
       <Form className="col-md-4" onSubmit={handleSubmit} >
 
       <Form.Group className="mb-2" controlId="exampleForm.ControlInput3">
         <Form.Control
           type="text"
           placeholder="Title"
           autoFocus
           className="shadow-none login-input"
           autoComplete="off"
           onChange={(e) => setTitle(e.target.value)}
           value={title}
           required
       />
        </Form.Group>
 
        <Form.Group className="mb-2" controlId="exampleForm.ControlInput4">
          <Form.Control
           type="text"
           placeholder="Platform"
           className="shadow-none login-input"
           autoComplete="off"
           onChange={(e) => setPlaform(e.target.value)}
           value={platform}
           required
         />
         </Form.Group>

         <Form.Group className="mb-2" controlId="exampleForm.ControlInput5">
          <Form.Control
           type="text"
           placeholder="Genre"
           className="shadow-none login-input"
           autoComplete="off"
           onChange={(e) => setGenre(e.target.value)}
           value={genre}
           required
         />
         </Form.Group>

         <Form.Group className="mb-2" controlId="exampleForm.ControlInput6">
          <Form.Control
           type="text"
           placeholder="image_url"
           className="shadow-none login-input"
           autoComplete="off"
           onChange={(e) => setImg_url(e.target.value)}
           value={img_url}
           required
         />
         </Form.Group>

         <Form.Group className="mb-2" controlId="exampleForm.ControlInput6">
          <Form.Control
           type="number"
           placeholder="Price"
           className="shadow-none login-input"
           autoComplete="off"
           onChange={(e) => setPrice(e.target.value)}
           value={price}
           required
         />
         </Form.Group>

         <p className={errors ? "errmsg" : "offscreen"} aria-live="assertive">{errors}</p>
 
         <br />
 
         <div id='login' className="text-center mb-3">
         <button className="btn btn-dark" type="submit" >Add Game</button>
         </div>
 
     
         </Form>
     </Row> : <LoginForm onLogin={onLogin}/> }

    </Container>
    )
}

export default GameForm