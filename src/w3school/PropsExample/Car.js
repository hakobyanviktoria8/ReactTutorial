import React from "react";
class Car extends React.Component {
    render() {
        const year = "2012";
        const car ={
            model:"MXS",
            xec:"dax",
            ak:"4h"
        };
        return (
            <>
                <h3>I am a {this.props.brand}!</h3>
                <p>I meake {year}</p>
                <p>My model is {car.model}. I have {car.xec} xec and {car.ak} anvadox.</p>
            </>
        )
    }
}
export default Car