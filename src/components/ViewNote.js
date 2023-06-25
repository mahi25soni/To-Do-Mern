import React, {useContext} from 'react'
import { NoteContext } from '../context/notes/NoteContext'
export default function ViewNote() {
    const notes = useContext(NoteContext)
    // console.log(notes)
  return (
    <>
    <div className="container">
        <h2>Your Tasks</h2>
        <div className="row">
        {notes.map((element)=> {
            <div className="col-3"> 
            <p>;ksdjfh;ksdfhkj;sdh</p>
            </div>
        })}
        </div>
    </div>
    </>
  )
}
