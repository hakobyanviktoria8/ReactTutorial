import React from "react";

class ButtonOnClick extends React.Component{
    constructor(props){
        super(props);
        this.state={value:""};
        this.handleChange = this.handleChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    handleChange(event){
        this.setState({value: event.target.value});
    }
    onClick(){
        return this.state.value;
    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <div>{this.onClick()}</div>
            </div>
        )
    }
}
export default ButtonOnClick