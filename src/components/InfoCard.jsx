import React from 'react'
import { Card, Button } from 'react-bootstrap'
const InfoCard = ({ photo, jobTitle, fullName, linkedin, github }) => {
  return (
    <Card className='card-component_container'>
      <Card.Img variant='top' src={photo} />
      <Card.Body>
        <Card.Title> {fullName}</Card.Title>
        <Card.Text>{jobTitle}</Card.Text>
        <Button variant='primary' href={github}>
          Github{' '}
        </Button>
        <Button style={{ marginLeft: '5px' }} variant='primary' href={linkedin}>
          Linkedin{' '}
        </Button>
      </Card.Body>
    </Card>
  )
}

export default InfoCard
