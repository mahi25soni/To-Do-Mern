import React, {useContext, useEffect} from 'react'
import { NoteContext } from '../context/notes/NoteContext'
import AddNote from './AddNote'
import ViewNote from './ViewNote'
export default function Home() {
    const a = useContext(NoteContext)
    // dont try to get {a}, will throw faltu errors

    // useEffect(()=> {
    //     a.newfunction()
    //     // eslint-disable-next-line
    // }, [])
  return (
    <>
    <div className="container">
      <AddNote></AddNote>
      <ViewNote></ViewNote>
    </div>
    </>
  )
}
