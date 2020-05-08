import React from "react";
import Garage from "./Garage";
class Car extends React.Component {
    render() {
        return (
            <div>
                <hr/>
                <h1>Props Example</h1>
                <hr/>
                <h2>I am a {this.props.brand}!</h2>
                <hr/>
                <Garage />
                <hr/>
            </div>
        )
    }
}
export default Car