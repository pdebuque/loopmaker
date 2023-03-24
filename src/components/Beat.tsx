import React from 'react';
import Note from './Note';
import type { BeatT } from '../model'

interface Props {
  beat: BeatT
}


const Beat: React.FC<Props> = (props) => {

  const { beat } = props

  return (
    <div className="beat">
      {beat.map((note, i) => {
        return <Note key={i} note={note} />
      })}
    </div>
  )
}

export default Beat