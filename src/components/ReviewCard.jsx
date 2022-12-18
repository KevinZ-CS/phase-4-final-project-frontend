import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

function ReviewCard() {
    return (
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
    )
}

export default ReviewCard