import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CardTemplate({ imageSrc, text, title, id }) {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500'
  return (
    <Link style={{ textDecoration: 'none' }} to={`/movie/${id}`}>
      <Card className='card-container'>
        <Card.Img
          className='card-imgg'
          variant='top'
          src={`${IMG_URL}/${imageSrc}`}
        />
        <Card.Body>
          <Card.Title className='card-title'>{title}</Card.Title>
          <Card.Text className='card-text'>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default CardTemplate
