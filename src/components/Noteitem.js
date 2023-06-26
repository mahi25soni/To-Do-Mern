import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashCan, faPenToSquare} from '@fortawesome/free-regular-svg-icons'
import '../index.css'

export default function Noteitem(props) {
  return (
    <>
    <div className="container mt-2">
    <div className="card " style={{width: "18rem"}}>
            <div className="card-body ">
                <p className="text-danger fw-bold text-decoration-underline d-inline">{props.title}</p>
                <span style={{position : 'absolute', right: '10px'}}>
                    <FontAwesomeIcon icon={faTrashCan} style={{marginLeft: "5px",     cursor: "pointer"}}/>
                    <FontAwesomeIcon icon={faPenToSquare} style={{marginLeft: "5px",     cursor: "pointer"}}/>
                </span      >
                <p className="text-primary mt-3">{props.name} </p>
            </div>
    </div>
    </div>
    </>
  )
}
