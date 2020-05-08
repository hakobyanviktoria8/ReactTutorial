import React from "react";
class Header3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({favoritecolor: "yellow"})
        }, 1000)
    }
    render() {
        return (
            <h3><i>1sec red=>yellow </i>My Favorite Color is {this.state.favoritecolor}</h3>
        );
    }
}
export default Header3