import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

function ReviewCard({ reviewData }) {
    return (
    <Card style={{ width: '54rem' }} className='mb-2'>
      <Card.Body>
        <Card.Title>{reviewData.username}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Score: {reviewData.score}/10</Card.Subtitle>
        <Card.Text>
        {reviewData.comment}
        </Card.Text>
      </Card.Body>
    </Card>
    )
}

export default ReviewCard