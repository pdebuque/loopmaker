import React from 'react'
import { useAppDispatch } from '../hooks';

import { NoteInt } from '../model';
import { toggleNoteActive } from '../redux/reducers/loop.reducer';


interface Props {
  note: NoteInt
}

const Note: React.FC<Props> = (props) => {

  const { note } = props;
  const dispatch = useAppDispatch()



  const handleClick = ()=>{
    console.log('clicked note #', note.id);
    dispatch(toggleNoteActive(note.id))
  }

  return (
    <div className='note'>
      <button className='note-btn' onClick={handleClick}>
        {note.active ? 'o' :'•'}
      </button>
    </div>
  )
}

export default Note