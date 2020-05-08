import React from "react";

//destr.obj function component
// export  default function ToDoItem({todo,index,onChange}) {
//     // console.log("todo",todo);
//     return(
//         <li>
//             <span>
//                 <input type="checkbox"  onChange={()=>onChange(todo.id)}/>
//                 <strong>{index +1}</strong>
//                 &nbsp;
//                 {todo.title}
//             </span>
//             <button>&times;</button>
//         </li>
//     )
// }

//props function component
// export  default function ToDoItem(props) {
//     return(
//         <li>
//             <span>
//                 <input type="checkbox" onChange={() => props.onChange(props.todo.id)}/>
//                 <b>{props.index+1}</b> &nbsp;
//                 {props.todo.title}
//             </span>
//             <button>&times;</button>
//         </li>
//     )
// }

//tate class component
class ToDoItem extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            index : 0,
            todo:{
                title: props.todo.title,
                id: props.todo.id,
                completed: false,
            }
        }
    }
    onChange = () => {
        this.setState({completed : true});
    };
    render(){
        return(
            <li>
            <span>
                <input type="checkbox" onChange={() => this.onChange(this.state.todo.id)}/>
                <b>{this.state.index+1}</b> &nbsp;
                {this.state.todo.title}
            </span>
                <button>&times;</button>
            </li>
        )
    }
}
export default ToDoItem