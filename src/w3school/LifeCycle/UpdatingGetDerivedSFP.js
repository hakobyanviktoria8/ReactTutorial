import React from "react";
class Header4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    static getDerivedStateFromProps(props, state) {
        return {favoritecolor: props.favcol };
    }
    changeColor = () => {
        this.setState({favoritecolor: "blue"});
    };
    render() {
        return (
            <div>
                <h3>My Favorite Color is <mark>{this.state.favoritecolor}</mark></h3>
                <button type="button" onClick={this.changeColor}>Change color</button>
            </div>
        );
    }
}
export default Header4