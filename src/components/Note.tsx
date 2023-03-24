import React from 'react'

const Note = () => {
  return (
    <div className='note'>
      <button className = 'note-btn' onClick = {()=>console.log('note click')}>•</button>
    </div>
  )
}

export default Note