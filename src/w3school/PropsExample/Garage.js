import React from "react";
import "./PropsStyle.css";
import Car from "./Car"

class Garage extends React.Component {
    render() {
        return (
            <div className="garage">
                <h2>Who lives in my garage?</h2>
                <Car brand="Ford" />
            </div>
        );
    }
}
export default Garage