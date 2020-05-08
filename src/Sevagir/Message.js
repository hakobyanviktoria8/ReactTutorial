import React from "react";

export  default function Message(props) {
    const mess = props.mess;
    return (<div>
        {mess.length > 0 && <h4>You have {mess.length} message!</h4>}
    </div>)
}