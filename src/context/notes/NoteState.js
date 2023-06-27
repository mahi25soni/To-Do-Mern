import {NoteContext}  from './NoteContext'
import { useState } from 'react'
const NoteState = (props) => {

    let basicUrl = "http://localhost:5000/tasks/"
    let authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDk2MTMxZGFkMTgzZTIyZDYzZjRiMTUiLCJlbWFpbCI6InZlcm1AZ21haWwuY29tIiwiaWF0IjoxNjg3NTU5NTg1fQ.qsk6_2q4O8Zab-VJLq-mBVshtHmNffSHtcNLIoob5t0"
    const [ note, setNote ] = useState([])


    const getAllNotes = () =>{
        fetch(`${basicUrl}`, {
            method : 'GET',
            headers : {
                "Content-Type": "application/json",
                "Authorization" : `${authToken}`
            }
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setNote(data)
        })
    }

    const addNote = async ({title , description}) =>{
        const response = await fetch(`${basicUrl}`, {
            method : "POST",
            headers : {
                "Content-Type": "application/json",
                "Authorization" : `${authToken}`
            },
            body : JSON.stringify({title, description})
        })
        await response.json()
        getAllNotes()
    }
     
    
    const deleteNote = async (id) => {
        const response = await fetch(`${basicUrl}${id}`, {
            method : 'DELETE',
            headers : {
                "Content-Type": "application/json",
                "Authorization" : `${authToken}`
            }
        })
        await response.json()
        getAllNotes()

    }
    return (
          <NoteContext.Provider value={{note, addNote, getAllNotes, deleteNote}}>
            <div>{props.children}</div>
          </NoteContext.Provider>
      );
}

export default NoteState