import React, {useContext, useEffect} from 'react'
import { NoteContext } from '../context/notes/NoteContext'
import Noteitem from './Noteitem'
export default function ViewNote() {
    const {note , getAllNotes} = useContext(NoteContext)
    useEffect(() => {
      getAllNotes()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <>
    <div className="container mt-3">
        <h2 className='text-center'>Your Tasks</h2>
        <div className="row">
        {note.map((element, key)=> {
            return <div className="col col-sm-3 "> 
            <Noteitem  key={element._id}  note = {element}></Noteitem>
            </div>
        })}
        </div>
    </div>
    </>
  )
}
