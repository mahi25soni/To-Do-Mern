import React , {useContext } from 'react'
// import { NoteContext } from '../context/notes/NoteContext'
import AddNote from './AddNote'
import ViewNote from './ViewNote'
import Alert from './Alert'
import { AlertContext } from '../context/AlertContext'

export default function Home() {
  const { alert } = useContext(AlertContext)

  return (
    <>
    <div className="container">
      <Alert alert = {alert}/>
      <AddNote></AddNote>
      <ViewNote></ViewNote>
    </div>
    </>
  )
}
