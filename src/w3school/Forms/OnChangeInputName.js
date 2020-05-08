import React from "react";
class OnChangeInputName extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '' };
    }
    myChangeHandler = (event) => {
        this.setState({username: event.target.value});
    };
    render() {
        return (
            <form>
                <h3>Hello {this.state.username}</h3>
                <p>Enter your name:</p>
                <input
                    type='text'
                    onChange={this.myChangeHandler}
                />
            </form>
        );
    }
}
export default OnChangeInputName