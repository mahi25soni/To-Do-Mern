import React, {useContext} from 'react'
import { NoteContext } from '../context/notes/NoteContext'
import Noteitem from './Noteitem'
export default function ViewNote() {
    const notes = useContext(NoteContext)
    // console.log(notes)
    // notes.map((element) => {
    //     console.log("dlkfjl " , element.task_name)
    // })
  return (
    <>
    <div className="container">
        <h2>Your Tasks</h2>
        <div className="row">
        {notes.map((element, key)=> {
            return <div className="col-3"> 
            <Noteitem  key={element._id}  name={element.task_name}></Noteitem>
            </div>
        })}
        </div>
    </div>
    </>
  )
}
