import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import GameCard from "./GameCard";
import LoginForm from "./LoginForm";

function MyAccount({ user, onLogin, userGamesArray }) {


    return ( 
        <>
        { user ? 
        <Container className='py-5 mt-5 mb-5'>
            <div className="title text-center">
                <h2 className="position-relative d-inline-block">Games Reviewed</h2>
            </div>
        <Row className="mt-4 gx-0 gy-3">
        {userGamesArray?.map((game) => <GameCard key={game.id} gameData={game} /> )}
        </Row>
        </Container> : 
        
        <LoginForm onLogin={onLogin} /> 
        }
        </>
    )
}

export default MyAccount