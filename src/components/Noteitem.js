import React , {useContext}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashCan, faPenToSquare} from '@fortawesome/free-regular-svg-icons'
import '../index.css'
import { NoteContext } from '../context/notes/NoteContext'
import { AlertContext } from '../context/AlertContext'

export default function Noteitem(props) {
  const {note, editButton} = props
  const {deleteNote } = useContext(NoteContext)
  const {settingAlert } = useContext(AlertContext)

  const deleting_note = (id) => {
    deleteNote(id)
    settingAlert("danger", "Your note has been added!")
  }



  return (
    <>
    <div className="container mt-2">
    <div className="card " style={{width: "18rem"}}>
            <div className="card-body ">
                <p className="text-danger fw-bold text-decoration-underline d-inline">{note.title}</p>
                <span style={{position : 'absolute', right: '10px'}}>
                    <FontAwesomeIcon icon={faTrashCan} onClick={()=> deleting_note(note._id)}  style={{marginLeft: "5px",cursor: "pointer"}}/>
                    <FontAwesomeIcon icon={faPenToSquare} onClick={() => editButton(note)} style={{marginLeft: "5px",     cursor: "pointer"}}/>
                </span      >
                <p className="text-primary mt-3">{note.description} </p>
            </div>
    </div>
    </div>
    </>
  )
}
