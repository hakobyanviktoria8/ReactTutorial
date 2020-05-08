import  React from "react";
class ShowHideButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(x => ({
            showWarning: !x.showWarning
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}
export default ShowHideButton