import React from 'react'
import Measure from './Measure'

// display will have four measures, each of which has four beats, each of which has four notes

const LoopDisplay = () => {
  return (
    <div id='loop-display'>
      <Measure />
      <Measure />
      <Measure />
      <Measure />
    </div>
  )
}

export default LoopDisplay