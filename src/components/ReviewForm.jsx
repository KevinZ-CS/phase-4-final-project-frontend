import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Row } from 'react-bootstrap';
import { NavLink, useParams } from "react-router-dom";

function ReviewForm({ user }) {
    const [score, setScore] = useState(0);
    const [comment, setComment] = useState('');
    const [errors, setErrors] = useState([]);
    const { id } = useParams();

    async function handleSubmit(e) {
        e.preventDefault();
        setErrors([])
        const response = await fetch('/reviews', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                score: score, 
                comment: comment,
                game_id: id,
                user_id: user, 
            }),
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
       <Form className="col-md-4"  onSubmit={handleSubmit}>
 
       <Form.Group className="mb-2" controlId="exampleForm.ControlInput3">
        <Form.Label>Score:</Form.Label>
         <Form.Control
           type="text"
           autoFocus
           className="shadow-none login-input"
           autoComplete="off"
           onChange={(e) => setScore(e.target.value)}
           value={score}
           required
       />
        </Form.Group>
 
        <Form.Group className="mb-2" controlId="exampleForm.ControlInput4">
          <Form.Control
           type="text"
           placeholder="Comment"
           className="shadow-none login-input"
           autoComplete="off"
           onChange={(e) => setComment(e.target.value)}
           value={comment}
           required
         />
         </Form.Group>


         <p className={errors ? "errmsg" : "offscreen"} aria-live="assertive">{errors}</p>
 
         <br />
 
         <div id='login' className="text-center mb-3">
         <button className="btn btn-dark" type="submit" >Add Review</button>
         </div>
 
     
         </Form>
     </Row>
        </Container>
        </>
    )
}

export default ReviewForm