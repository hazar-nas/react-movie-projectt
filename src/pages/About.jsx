import React from 'react'
import InfoCard from '../components/InfoCard'
import { infocard } from '../infocard'

const About = () => {
  return (
    <div className='infocard_container'>
      {infocard.map((item) => (
        <InfoCard
          key={item.id}
          photo={item.photo}
          jobTitle={item.jobTitle}
          fullName={item.fullName}
          linkedin={item.linkedin}
          github={item.github}
        />
      ))}
    </div>
  )
}

export default About
