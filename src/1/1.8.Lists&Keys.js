import React from "react";
import DoubledNumber from "./1.8.1.DoubledNumber";

import img41 from "./img/Screenshot_41.jpg";
import img42 from "./img/Screenshot_42.jpg";
import img44 from "./img/Screenshot_44.jpg";
import img45 from "./img/Screenshot_45.jpg";
import img46 from "./img/Screenshot_46.jpg";
import img47 from "./img/Screenshot_47.jpg";
import img48 from "./img/Screenshot_48.jpg";
import ToDoList from "./1.8.2.ToDo";
import Blog from "./1.8.3UniqueKey";

class ListsKeys extends React.Component{
    render(){
        const numbers =[1,2,3,4,5,6,7,8,9,10];
        const doubled = numbers.map((number) => number * 2+",");
        let todos = [
            {id: 1, completed: false, title: "Learn JS"},
            {id: 2, completed: false, title: "Learn JSX"},
            {id: 3, completed: false, title: "Learn HTML"},
            {id: 4, completed: false, title: "Learn CSS"},
        ];
        const posts = [
            {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
            {id: 2, title: 'Installation', content: 'You can install React from npm.'}
        ];
        function toggleTodo(id) {
            todos = todos.map(todo=>{
                if (todo.id===id){
                    todo.completed = !todo.completed;
                    console.log(todo.completed)
                }
                return todo
            })
        }
        return(
            <div>
                <h2>1.8.Lists and Keys</h2>
                <p>Դիտարկենք </p>
                <img src={img41} alt=""/>
                <h4>Doubled array {doubled}</h4>
                <hr/>
            <DoubledNumber numbers={numbers} />
                <img src={img44} alt=""/>
                <p>Կոդը աշխատացնելով կստանանք արդյունքը, սական error-ով</p>
                <img src={img42} alt=""/>
                <p>Յուրաքանչյուր տարր պետք է ունենա իր <b>unique key</b>, դա կարող է լինել ՝ անուն, տարրը ինքը, կամ ինդեխը:Id-ի նման որպեսզի հետագայում դիմենք իրան:</p>
                <img src={img45} alt=""/>
                <p>Շատ դեպքերում օգտագործվում է ID</p>
                <img src={img46} alt=""/>
                <p>Եթե ID չկա INDEX-ը</p>
                <img src={img47} alt=""/>
                <hr/>
                <p>Փորձենք ստանալ TODOLIST</p>
            <ToDoList todos = {todos} onToggle={toggleTodo}/>
                <hr/>
                <p>Օգտագործենք unique ID , կարող է չլինել global unique: Նույն key կարող ենք օգտագործել տարբեր array-ների համար:</p>
                <img src={img48} alt=""/>
            <Blog posts={posts} />

            </div>
        )
    }
}
export default ListsKeys
