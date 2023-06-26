import {NoteContext}  from './NoteContext'
import { useState } from 'react'
const NoteState = (props) => {
    const intial_notes = [
            {
                "_id": "64961e09c199b74ed90ad217",
                "title":"wake up sid",
                "description": "add you second task",
                "done": false,
                "user_id": "6496131dad183e22d63f4b15",
                "__v": 0
            },
            {
                "_id": "64961e0dc199b74ed90ad21a",
                "title":"wake up sid",
                "description": "add you third task",
                "done": false,
                "user_id": "6496131dad183e22d63f4b15",
                "__v": 0
            },
            {
                "_id": "64961e14c199b74ed90ad21d",
                "title":"wake up sid",
                "description": "add you fourth task",
                "done": false,
                "user_id": "6496131dad183e22d63f4b15",
                "__v": 0
            },
            {
                "_id": "64961e18c199b74ed90ad220",
                "title":"wake up sid",
                "description": "add you fifth task",
                "done": false,
                "user_id": "6496131dad183e22d63f4b15",
                "__v": 0
            }
]
    const [ note, setNote ] = useState(intial_notes)
    
    return (
          <NoteContext.Provider value={{note, setNote}}>
            <div>{props.children}</div>
          </NoteContext.Provider>
      );
}

export default NoteState