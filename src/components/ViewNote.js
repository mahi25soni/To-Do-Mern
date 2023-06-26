import React, {useContext} from 'react'
import { NoteContext } from '../context/notes/NoteContext'
import Noteitem from './Noteitem'
export default function ViewNote() {
    const all = useContext(NoteContext)
    const note = all.note
    // console.log(note)
    // note.map((element) => {
    //     console.log("dlkfjl " , element.task_name)
    console.log("mere apni ", note)
    // })
  return (
    <>
    <div className="container mt-3">
        <h2 className='text-center'>Your Tasks</h2>
        <div className="row">
        {note.map((element, key)=> {
            return <div className="col col-sm-3 "> 
            <Noteitem  key={key}  title = {element.title} name={element.description}></Noteitem>
            </div>
        })}
        </div>
    </div>
    </>
  )
}
