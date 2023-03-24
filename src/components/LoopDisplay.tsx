import React from 'react'
import Measure from './Measure';
import {LoopT} from '../model'

// display will have four measures, each of which has four beats, each of which has four notes
interface Props {
  loop: LoopT;
}


const LoopDisplay: React.FC<Props> = (props) => {

  const {
    loop
  } = props;


  return (
    <div id='loop-display'>
      {loop.map((measure,i)=>{
        return(<Measure key = {i} measure = {measure}/>)
      })}
    </div>
  )
}

export default LoopDisplay