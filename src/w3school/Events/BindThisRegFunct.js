import React from "react";
class Football1 extends React.Component {
    constructor(props) {
        super(props);
        this.shoot = this.shoot.bind(this)
    }
    shoot() {
        console.log(this);
        /*
        Thanks to the binding in the constructor function,
        the 'this' keyword now refers to the component object
        */
    }
    render() {
        return (
            <button onClick={this.shoot}>Take the shot!</button>
        );
    }
}
export default Football1