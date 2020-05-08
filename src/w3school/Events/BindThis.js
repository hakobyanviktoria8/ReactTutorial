import React from "react";
class Football extends React.Component {
    shoot = () => {
        console.log(this);  //Football classn a
        /*
        The 'this' keyword refers to the component object
        */
    };
    render() {
        return (
            <button onClick={this.shoot}>Take the shot!</button>
        );
    }
}
export default Football