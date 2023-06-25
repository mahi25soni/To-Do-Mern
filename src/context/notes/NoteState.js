import {NoteContext}  from './NoteContext'
import { useState } from 'react'
const NoteState = (props) => {
    const intial_notes = {
        "name": 'mahendra Soni',
        "class":"10th B"
    }


    return (
          <NoteContext.Provider value={{intial_notes}}>
            <div>{props.children}</div>
          </NoteContext.Provider>
      );
}

export default NoteState