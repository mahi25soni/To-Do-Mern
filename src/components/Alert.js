import React from "react";
import "../App.css"

export default function Alert(props) {
  return (
    <div style={{height : "50px"}}> 
{    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" id="alertwala">
    <strong>{props.alert.message}</strong> .
    </div>}
    </div>
  );
}

