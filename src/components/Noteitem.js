import React from 'react'

export default function Noteitem(props) {
  return (
    <>
    <div className="container">
    <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <p className="text-danger fw-bold text-decoration-underline">Make your bed</p>
                <div className='containers'>
                    <p>skdfj;lskdfsdfkl</p>
                    <i className="fa-solid fa-trash" title="Edit"   ></i>
                    <i className="fa-regular fa-pen-to-square" title="Delete"></i>
                </div>
                <p className="text-primary">{props.name}</p>
            </div>
    </div>
    </div>
    </>
  )
}
