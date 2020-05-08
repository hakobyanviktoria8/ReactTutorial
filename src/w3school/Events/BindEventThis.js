import React from "react";
class BindEventThis extends React.Component {
    shoot(a) {
        alert(a);
    }
    render() {
        return (
            <button onClick={this.shoot.bind(this, "Goal")}>Take the shot!</button>
        );
    }
}
export  default  BindEventThis