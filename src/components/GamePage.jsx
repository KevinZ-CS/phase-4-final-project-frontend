import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button } from 'react-bootstrap';
import { NavLink, useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";

function GamePage({ user }) {

    const [errors, setErrors] = useState([]);
    const [game, setGame] = useState([])
    const { id } = useParams();

    useEffect(() => {
        setErrors([]);
        const fetchData = async () => {
            const response = await fetch(`/games/${id}`);
            const data = await response.json();
            if (response.ok) {
              console.log('ok')
              setGame(data)
                } else {
                    console.log(data.error)
                    setErrors(data.error)
                }
        }
        fetchData()
    }, [])

    console.log(game)

    return (

    <Container className='py-5 px-5 mt-4 mb-5'>
       {/* <h1>Game not found</h1> Game not found */}
    { errors.length > 0 ? 
    <h1>{errors}</h1> : 
    <>
    <Card className="flex-row flex-wrap rounded-0 px-4 py-4" >
    <img src = {game&&game.img_url} alt = "" className="gamePageImage"/>
    <Card.Body className="px-3 py-0">
    <Card.Title>{game.title}</Card.Title>
    Genre: {game.genre}
    <br />
    Platform: {game.platform}
    <br />
    Price: ${game.price}
    </Card.Body>
    </Card>   

    <div className="title text-center py-5">
        <h2 className="position-relative d-inline-block">Reviews</h2>
    </div>

    {/* will need to map reviews data to ReviewCard compoent */}

    <Card style={{ width: '54rem' }} className='mb-2'>
      <Card.Body>
        <Card.Title>Kevin</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Score: 8/10</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        {user ? <NavLink to={`/${id}/`+ `addReview`}><Button variant='dark'>Add Review</Button></NavLink> : null }
    </> 
    }

    </Container>

    )
}

export default GamePage