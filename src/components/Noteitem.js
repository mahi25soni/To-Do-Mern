import React , {useContext}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashCan, faPenToSquare} from '@fortawesome/free-regular-svg-icons'
import '../index.css'
import { NoteContext } from '../context/notes/NoteContext'
export default function Noteitem(props) {
  const {note} = props
  const {deleteNote } = useContext(NoteContext)


  return (
    <>
    <div className="container mt-2">
    <div className="card " style={{width: "18rem"}}>
            <div className="card-body ">
                <p className="text-danger fw-bold text-decoration-underline d-inline">{note.title}</p>
                <span style={{position : 'absolute', right: '10px'}}>
                    <FontAwesomeIcon icon={faTrashCan} onClick={()=> deleteNote(note._id)}  style={{marginLeft: "5px",cursor: "pointer"}}/>
                    <FontAwesomeIcon icon={faPenToSquare} style={{marginLeft: "5px",     cursor: "pointer"}}/>
                </span      >
                <p className="text-primary mt-3">{note.description} </p>
            </div>
    </div>
    </div>
    </>
  )
}
