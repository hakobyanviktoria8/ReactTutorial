import React from "react";
class Header1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    static getDerivedStateFromProps(props, state) {
        return {favoritecolor: props.favcol };
    }
    render() {
        return (
            <h3>My Favorite Color is {this.state.favoritecolor}</h3>
        );
    }
}
export default Header1