import React from "react";
import ToDoItem1 from "./ToDoItem1";
import "./ToDoStyle1.css";

function ToDoList1(props) {
    let todos = [
        {id: 1, completed: false, title: "Learn JS"},
        {id: 2, completed: false, title: "Learn JSX"},
        {id: 3, completed: false, title: "Learn HTML"},
        {id: 4, completed: false, title: "Learn CSS"},
    ];
    function toggleTodo(id) {
        // console.log("todo id" , id);
        todos = todos.map(todo => {
            if (todo.id === id){
                todo.completed = !todo.completed;
                console.log(todo.completed)
            }
            return todo
        })
    }
    return(
        <div>
            <h2>To Do List</h2>
            <ul>
                {todos.map(todo => {return <ToDoItem1  todo={todo}  key={todo.id} />})}
            </ul>
        </div>
    )
}
export default ToDoList1