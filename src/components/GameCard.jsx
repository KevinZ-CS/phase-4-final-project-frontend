import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

function GameCard({ gameData }) {
    return (
        <>
        <Col className="col-lg-4">
        <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src={gameData.img_url} className='card-img-top' />
            <Card.Body className="text-center">
                <Card.Title>
                    <NavLink to={'/games/'+gameData.id} className='gameName' >
                    {gameData.title}
                    </NavLink>
                </Card.Title>
            </Card.Body>
        </Card>
        </Col>
        </>
    )
}

export default GameCard