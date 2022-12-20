import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Row } from 'react-bootstrap';
import { useParams, useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";

function EditReviewForm({ user, onLogin, handleDeleteReview, handleUpdateReview }) {

    const [review, setReview] = useState('')
    const [score, setScore] = useState(0)
    const [username, setUsername] = useState('')
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    const { id, game_id } = useParams();



    useEffect(() => {
        setErrors([]);
        const fetchData = async () => {
            const response = await fetch(`/reviews/${id}`);
            const data = await response.json();
            if (response.ok) {
              setUsername(data.username)
              setScore(data.score)
              setReview(data.comment)
                } else {
                    setErrors(data.error)
                }
        }
        fetchData()
    }, [])


    async function handleSubmit(e) {
        e.preventDefault();
        setErrors([])
        const response = await fetch(`/reviews/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                score: score, 
                comment: review,
            }),
        })
        const data = await response.json();
        if (response.ok) {
            handleUpdateReview(data)
            history.push(`/game/${data.game_id}`)
            //push will reload the data anyway since useEffect on gamePage will be called and setting the updated data
            } else {
             setErrors(data.errors);
            }
          }

    async function handleDelete() {
        setErrors([])
        const response = await fetch(`/reviews/${id}`, {
            method: "DELETE",
        })
        const data = await response.json();
        if (response.ok) {
            handleDeleteReview(id, game_id)
            history.push(`/MyAccount`)
            } else {
             setErrors(data.errors);
            }
          }


    return (
        <>
        { user ?
    <Container className="successmargins">
    <Row>
       <div className="col-md-4"></div>
       <Form className="col-md-4" onSubmit={handleSubmit} >
 
       <Form.Group className="mb-2" controlId="exampleForm.ControlInput3">
        <Form.Label>{username}:</Form.Label>
         <Form.Control
           type="number"
           placeholder="Score"
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
           placeholder="Review"
           className="shadow-none login-input"
           autoComplete="off"
           onChange={(e) => setReview(e.target.value)}
           value={review}
           required
         />
         </Form.Group>

         <p className={errors ? "errmsg" : "offscreen"} aria-live="assertive">{errors}</p>
 
         <br />
 
         <div id='login' className="text-center mb-3">
         <button className="btn btn-dark me-4" type="submit" >Update</button>
         <button className="btn btn-dark" type="button" onClick={handleDelete}>Delete</button>
         </div>
 
     
         </Form>
      </Row>
         
    </Container> : <LoginForm onLogin={onLogin} />}
    </>
    )
}

export default EditReviewForm