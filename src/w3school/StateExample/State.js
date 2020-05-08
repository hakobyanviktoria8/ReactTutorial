import React from "react";
class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }
    changeColor = () => {
      this.setState({color:"darkblue"})
    };
    render() {
        return (
            <div>
                <h1>State Example</h1>
                <h2>My Car</h2>
                <p>Is {this.state.brand}, it's model {this.state.model}.</p>
                <p>It's has {this.state.color} and make {this.state.year}.</p>
                <button type="button" onClick={this.changeColor}>Change color</button>
                <hr/>
            </div>
        );
    }
}
export  default State