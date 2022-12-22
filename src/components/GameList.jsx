import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Button } from 'react-bootstrap';
import GameCard from "./GameCard";
import { useHistory } from "react-router-dom";


function GameList({ user, gamesArray }) {

    // const [gamesArray, setGamesArray] = useState([]);
    const history = useHistory();

    function handleClick() {
        history.push('/games')
    }


    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('/games');
    //         const data = await response.json();
    //         if (response.ok) {
    //           setGamesArray(data)
    //             } 
    //     }
    //     fetchData()
    // }, [])


    return (
        <>
        <Container className='py-5 mt-5 mb-5'>
            <div className="title text-center">
                <h2 className="position-relative d-inline-block">All Games</h2>
            </div>
        <Row className="mt-4 gx-0 gy-3">
        {gamesArray.map((game) => <GameCard key={game.id} gameData={game} /> )}
        </Row>
        { user ? <Button className="mt-4 float-end" variant="dark" size='lg' onClick={handleClick}>Add Game</Button> : null }
        </Container>
        </>
    )
}

export default GameList