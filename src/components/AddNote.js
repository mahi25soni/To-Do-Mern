import React from 'react'

export default function AddNote() {
  return (
    <>
    <div className="container  mt-3">
        <h2 className='text-center'>Add Your Note</h2>
        <div className="mb-3">
            <label htmlFor="notetitle" className="form-label"> <strong>Note Title</strong></label>
            <input type="text" className="form-control" id="notetitle" />
        </div>
        <div className="mb-3">
            <label htmlFor="notedescription" className="form-label"><strong>Note Description</strong></label>
            <input type="text" className="form-control" id="notedescription" ></input>
        </div>
        <button className="btn btn-sm btn-secondary">Submit Note</button>
    </div>
    </>
  )
}
