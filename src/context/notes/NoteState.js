import {NoteContext}  from './NoteContext'
import { useState } from 'react'
const NoteState = (props) => {
    const info = {
        "name": 'mahendra Soni',
        "class":"10th B"
    }

    const [ newinfo , setInfo ] = useState(info)
    const newfunction = () => {
        setTimeout(() => {
            setInfo({
                "name":"harsh prakash dubey",
                "class": "nursery"
            })
        }, 3000)
    }
    return (
          <NoteContext.Provider value={{newinfo, newfunction}}>
            <div>{props.children}</div>
          </NoteContext.Provider>
      );
}

export default NoteState