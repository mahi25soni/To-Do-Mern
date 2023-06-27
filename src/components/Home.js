import React from 'react'
// import { NoteContext } from '../context/notes/NoteContext'
import AddNote from './AddNote'
import ViewNote from './ViewNote'


export default function Home() {
 

  return (
    <>
    <div className="container">
      <AddNote></AddNote>
      <ViewNote></ViewNote>
    </div>
    </>
  )
}
