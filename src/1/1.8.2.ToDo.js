import React from "react";
import ToDoItem from "./1.8.2.ToDoItem";


export  default function ToDoList(props) {
    return(
        <ul>
            {props.todos.map((todo,index)=>{
                    return <ToDoItem todo={todo}  key={todo.id} index={index}
                                     onChange = {props.onToggle} />
                }
            )}
        </ul>
    )
}

