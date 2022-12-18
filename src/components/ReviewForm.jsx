import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Row, Dropdown } from 'react-bootstrap';
import { NavLink, useParams, useHistory } from "react-router-dom";

function ReviewForm({ user }) {
    const [score, setScore] = useState(0);
    const [comment, setComment] = useState('');
    const [errors, setErrors] = useState([]);
    const { id } = useParams();
    const history = useHistory();

    // console.log(user.username)
    console.log(user)

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
                user_id: user.id, 
                username: user.username,
            }),
        })
        const data = await response.json();
        if (response.ok) {
            console.log('ok')
            console.log(data)
            history.push(`/game/${id}`)
            //  onLogin(data);
            } else {
                console.log('not ok')
                console.log(data)
             setErrors(data.errors);
            }
          }

    function handleChange(e) {
        setScore(e.target.value)
    }


    return (
        <>
        <Container className="successmargins">
        <Row>
       <div className="col-md-4"></div>
       <Form className="col-md-4"  onSubmit={handleSubmit}>

       <Dropdown className="mb-2">
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
      {score ? score : `Score`}
      </Dropdown.Toggle>

      <Dropdown.Menu onToggle={handleChange}>
                <Dropdown.Item as='button' value='0' onClick={handleChange} >0</Dropdown.Item>
                <Dropdown.Item as='button' value='1' onClick={handleChange} >1</Dropdown.Item>
                <Dropdown.Item as='button' value='2' onClick={handleChange} >2</Dropdown.Item>
                <Dropdown.Item as='button' value='3' onClick={handleChange} >3</Dropdown.Item>
                <Dropdown.Item as='button' value='4' onClick={handleChange} >4</Dropdown.Item>
                <Dropdown.Item as='button' value='5' onClick={handleChange} >5</Dropdown.Item>
                <Dropdown.Item as='button' value='6' onClick={handleChange} >6</Dropdown.Item>
                <Dropdown.Item as='button' value='7' onClick={handleChange} >7</Dropdown.Item>
                <Dropdown.Item as='button' value='8' onClick={handleChange} >8</Dropdown.Item>
                <Dropdown.Item as='button' value='9' onClick={handleChange} >9</Dropdown.Item>
                <Dropdown.Item as='button' value='10' onClick={handleChange} >10</Dropdown.Item>
            </Dropdown.Menu>
    </Dropdown>
 
       {/* <Form.Group className="mb-2" controlId="exampleForm.ControlInput3">
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
        </Form.Group> */}
 
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