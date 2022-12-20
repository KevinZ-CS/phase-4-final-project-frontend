import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Row, Dropdown } from 'react-bootstrap';
import { NavLink, useParams, useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";

function EditReviewForm({ user, onLogin }) {

    const [review, setReview] = useState('')
    const [score, setScore] = useState(0)
    const [username, setUsername] = useState('')
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    // const [game, setGame] = useState([])
    const { id } = useParams();

    useEffect(() => {
        setErrors([]);
        const fetchData = async () => {
            const response = await fetch(`/reviews/${id}`);
            const data = await response.json();
            if (response.ok) {
              console.log('ok')
              console.log(data)
              setUsername(data.username)
              setScore(data.score)
              setReview(data.comment)
                } else {
                    console.log(data.error)
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
            console.log('ok')
            console.log(data)
            history.push(`/game/${data.game_id}`)
            //  onLogin(data);
            } else {
                console.log('not ok')
                console.log(data)
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
            console.log('ok')
            console.log(data)
            history.push(`/MyAccount`)
            //  onLogin(data);
            } else {
                console.log('not ok')
                console.log(data)
             setErrors(data.errors);
            }
          }





    console.log(review)


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