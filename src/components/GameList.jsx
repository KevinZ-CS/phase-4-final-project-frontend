import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap'


function GameList() {


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/games');
            const data = await response.json();
            if (response.ok) {
              console.log('ok')
              console.log(data)
                } 
        }
        fetchData()
    }, [])


    return (
        <>
        <Container className='py-5 mt-5 mb-5'>
            <div className="title text-center">
                <h2 className="position-relative d-inline-block">All Games</h2>
            </div>
        <Row>

        </Row>
        </Container>
        </>
    )
}

export default GameList