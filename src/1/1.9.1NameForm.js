import React from "react";
class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state={value: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({value: e.target.value});
    }
    handleSubmit(e){
        alert("A name is " +  this.state.value);
        e.preventDefault();
    }
    render(){
        return(
            <div className={"h4"}>
                <h3>1.9.1.NameForm</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value={"Submit"} />
                </form>
            </div>
        )
    }
}
export default NameForm