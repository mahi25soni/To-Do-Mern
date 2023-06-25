import React, {useContext, useEffect} from 'react'
import { NoteContext } from '../context/notes/NoteContext'
export default function Home() {
    const a = useContext(NoteContext)
    // dont try to get {a}, will throw faltu errors

    useEffect(()=> {
        a.newfunction()
        // eslint-disable-next-line
    }, [])
  return (
    <>
    My name is {a.newinfo.name} and I study in class {a.newinfo.class}
    </>
  )
}
