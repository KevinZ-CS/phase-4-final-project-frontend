import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button } from 'react-bootstrap';
import { NavLink, useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";

function GamePage({ user, gameReviews, setGameReviews }) {

    const [errors, setErrors] = useState([]);
    const [game, setGame] = useState([]); //holds info about the specific game
    const { id } = useParams();

    useEffect(() => {
        setErrors([]);
        const fetchData = async () => {
            const response = await fetch(`/games/${id}`);
            const data = await response.json();
            if (response.ok) {
              setGame(data)
              setGameReviews(data.reviews)
              //data for reviews gets set here 
                } else {
                    setErrors(data.error)
                }
        }
        fetchData()
    }, [])


    return (

    <Container className='py-5 px-5 mt-4 mb-5'>
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

 
    {gameReviews?.map((review) => <ReviewCard  key={review.id} reviewData={review} />)}
        {/* ? asks if the array exists */}
  
        {user ? <NavLink to={`/${id}/`+ `addReview`}><Button variant='dark'>Add Review</Button></NavLink> : null }
    </> 
    }

    </Container>

    )
}

export default GamePage