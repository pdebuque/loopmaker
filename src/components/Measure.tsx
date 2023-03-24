import React from 'react';
import Beat from './Beat';

import type { MeasureT } from '../model'

interface Props {
  measure: MeasureT
}

const Measure: React.FC<Props> = (props) => {

  const { measure } = props

  return (
    <div className='measure'>
      {measure.map((beat, i) => {
        return <Beat key={i} beat={beat} />
      })}
    </div>
  )
}

export default Measure