import React, { useState , useContext} from 'react'
import { NoteContext } from '../context/notes/NoteContext'
import  {useNavigate}  from "react-router-dom";
import { AlertContext } from '../context/AlertContext';

export default function SignupForm() {

    const {userSignup} = useContext(NoteContext)
    const { settingAlert }= useContext(AlertContext)
    const [cred , setCred] = useState({username:"", email: "", password : ""})
    const history = useNavigate()

    const sendingCred = async (e)=> {
        e.preventDefault()
        const return_value = await userSignup(cred)

        if(return_value){
            history("/login")
            settingAlert("primary", "Welcome to your private data, Please Login to continue...")
        }
    }

    const credOnChange = (event)=>{
        event.preventDefault()
        setCred({...cred, [event.target.id] : event.target.value})

    }
  return (
    <>
    <div className="container d-flex justify-content-center mt-5">
    <form  style={{ width: "30%", padding : "20px", backgroundColor :"rgb(192,192,192)" }} onSubmit={sendingCred}>
    <div className="mb-3">
            <label htmlFor="username" className="form-label"> <strong>username </strong> </label>
            <input type="text" className="form-control" id="username" onChange={credOnChange}/>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label"> <strong>Email address</strong> </label>
            <input type="email" className="form-control" id="email" onChange={credOnChange}/>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label"><strong>Password</strong> </label>
            <input type="password" className="form-control" id="password" onChange={credOnChange}/>
        </div>
        <div className='text-center'>

        <button type="submit" className="btn btn-outline-dark" >Sign Up</button>
        </div>
    </form>
    </div>
</>
  )
}
