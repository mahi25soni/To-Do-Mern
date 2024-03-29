import {NoteContext}  from './NoteContext'
import { useState} from 'react'


const NoteState = (props) => {

    let basicUrl = "https://merntodobackend-w7r9.onrender.com/tasks/"
    // let authToken = localStorage.getItem("authorization")
    const [ note, setNote ] = useState([])


    const getAllNotes = () =>{
        fetch(`${basicUrl}`, {
            method : 'GET',
            headers : {
                "Content-Type": "application/json",
                "authorization" : localStorage.getItem("authorization")
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
                "authorization" : localStorage.getItem("authorization")
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
                "authorization" : localStorage.getItem("authorization")
            }
        })
        await response.json()
        getAllNotes()



    }

    const editNote = async ({id , title , description}) => {
        const response = await fetch(`${basicUrl}${id}`, {
            method : "PUT",
            headers : {
                "Content-Type": "application/json",
                "authorization" : localStorage.getItem("authorization")
            },
            body : JSON.stringify({title, description})
        })
        await response.json()
        getAllNotes()


    }


    const userLogin = async ({email, password}) =>{
        const response = await fetch("https://merntodobackend-w7r9.onrender.com/auth/login/", {
            method : "POST",
            headers : {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({email, password})
        })
        const {status, data} = await response.json()
        if(status){
            localStorage.setItem("authorization", data)

            return status;
        }
        else {
            alert(data)
            return data;
        }
        
    }

    
    const userSignup = async ({username, email, password}) =>{
        const response = await fetch("https://merntodobackend-w7r9.onrender.com/auth/register/", {
            method : "POST",
            headers : {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({username, email, password})
        })
        const {status} = await response.json()
        if(status){
            return status

        }
        else {
            alert("New Email Id is already being used")
            return status;
        }
        
    }
    return (
          <NoteContext.Provider value={{note, addNote, getAllNotes, deleteNote, editNote, userLogin, userSignup}}>
            <div>{props.children}</div>
          </NoteContext.Provider>
      );
}

export default NoteState