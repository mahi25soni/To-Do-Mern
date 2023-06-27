import { createContext, useState } from "react";

const AlertContext = new createContext()


const AlertState = (props) => {
    const [alert , setAlert] = useState()

    const settingAlert = (type, message) => {
      setAlert({
        message : message,
        type : type
      })
      setTimeout(()=> {
        setAlert()
      },1500)
    }
    return (
        <AlertContext.Provider value={{alert, settingAlert}}>
          <div>{props.children}</div>
        </AlertContext.Provider>
    );
}

export {AlertContext , AlertState}