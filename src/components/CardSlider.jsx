import React from 'react'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

const CardSlider = ({ Arrayy, currentState, setCurrentState }) => {
  return (
    <>
      <FaAngleLeft
        className='card-slider_component--left'
        onClick={() => {
          currentState.before !== 0 &&
            setCurrentState((preValue) => {
              return {
                before: preValue.before - 5,
                after: preValue.after - 5,
              }
            })
        }}
        // style={{
        //   cursor: 'pointer',
        //   position: 'absolute',
        //   left: '2rem',
        //   fontSize: '1.2rem',
        // }}
      />
      <FaAngleRight
        onClick={() => {
          Arrayy.length - 1 > currentState.after &&
            setCurrentState((preValue) => {
              return {
                before: preValue.before + 5,
                after: preValue.after + 5,
              }
            })
        }}
        className='card-slider_component--right'
      />
    </>
  )
}

export default CardSlider
