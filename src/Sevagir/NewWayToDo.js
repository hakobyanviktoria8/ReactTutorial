import React from "react";
function List(props) {
    return(
        <ul>
            {this.props.itemArr.map(x=>(
                <li key={x.id}>{x.text}</li>
            ))}
        </ul>
    )
}
class ToDoRender extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:"",
            itemArr:[],
        };
        this.btnSubmit = this.btnSubmit.bind(this);
    }
    btnSubmit(e){
        e.preventDefault();
        if (this.state.inputValue.length === 0) {
            return;
        }
        this.setState(state => ({
            itemArr: state.inputValue.concat(this.state.inputValue),
            inputValue: ''
        }));
    }
    render(){
        return(
            <div>
                <h5>To Do List</h5>
                <input type="text" value={this.state.inputValue}/>
                <button onSubmit={this.btnSubmit}>ADD</button>
                <List />
            </div>
        )
    }
}
export default ToDoRender

{/*<div class="container">*/}
        {/*<ul id="uList"></ul>*/}
{/*</div>*/}


    {/*add.onclick =  () => {*/}
    {/*let id = +localStorage.getItem("id");*/}
    {/*id ?  id+=1 : id=1;*/}
    {/*localStorage.setItem("id",id);*/}
    {/*uList.innerHTML +=*/}
    {/*`<li>*/}
                {/*${inputValue.value}*/}
                {/*<span onclick="remove(this)">&times;</span>*/}
            {/*</li>`;*/}
    {/*localStorage.setItem(id,inputValue.value)*/}
{/*};*/}
    {/*remove = (e) => e.closest("li").outerHTML = "";*/}