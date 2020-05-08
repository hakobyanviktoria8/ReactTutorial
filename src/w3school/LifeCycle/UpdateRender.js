import React from "react"
class Header6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    changeColor = () => {
        this.setState({favoritecolor: "blue"});
    };
    render() {
        return (
            <div>
                <h3>My Favorite Color is {this.state.favoritecolor}</h3>
                <button type="button" onClick={this.changeColor}>Change color</button>
            </div>
        );
    }
}
export default Header6