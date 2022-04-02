import React from 'react'
import { Card, Button } from 'react-bootstrap'
const InfoCard = ({ photo, jobTitle, fullName, linkedin, github }) => {
  return (
    <Card className='card-component_container'>
      <Card.Img
        variant='top'
        src={photo}
        style={{ width: '100%', height: '220px' }}
      />
      <Card.Body>
        <Card.Title style={{ fontSize: '1.2rem' }}> {fullName}</Card.Title>
        <Card.Text className='card-component_container--job'>
          {jobTitle}
        </Card.Text>
        <Button style={{ fontSize: '.5rem' }} variant='secondary' href={github}>
          Github{' '}
        </Button>
        <Button
          style={{ fontSize: '.5rem', marginLeft: '5px' }}
          variant='primary'
          href={linkedin}
        >
          Linkedin{' '}
        </Button>
      </Card.Body>
    </Card>
  )
}

export default InfoCard
