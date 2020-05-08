import React from "react"
function ToDoItem1(props) {
    return(
        <li>
            <span>
                <input type="checkbox" />
                {props.todo.title}
            </span>
            <button className="to-do-item-button">&times;</button>
        </li>
    )
}
export default ToDoItem1