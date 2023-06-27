import React , {useContext, useState}from 'react'
import { NoteContext } from '../context/notes/NoteContext'
export default function AddNote() {
    const { addNote } = useContext(NoteContext)

    const [itemobject, setItemobject] = useState({
        "title": "",
        "description":""
    })
    function addToList(e) {
        // e.preventDefault()
        console.log("nothig skdf s ", itemobject)
        addNote(itemobject)
        setItemobject({
            "title": "",
            "description":""
        })
        e.target.classList.remove("active")
    }
    function get_values(e) {
        setItemobject({...itemobject, [e.target.id] : e.target.value})
    }

  return (
    <>
    <div className="container  mt-3">
        <h2 className='text-center'>Add Your Note</h2>
        <div className="mb-3">
            <label htmlFor="title" className="form-label"> <strong>Note Title</strong></label>
            <input type="text" className="form-control" id="title" value={itemobject.title} onChange={get_values}/>
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label"><strong>Note Description</strong></label>
            <input type="text" className="form-control" id="description" value={itemobject.description}  onChange={get_values}></input>
        </div>
        <button className="btn btn-sm btn-secondary" onClick={addToList}>Submit Note</button>
    </div>
    </>
  )
}
