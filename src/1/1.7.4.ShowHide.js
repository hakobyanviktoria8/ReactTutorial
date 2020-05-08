import React from "react";
function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div style={{backgroundColor:"rgba(44, 229, 58, 0.07)", padding:"10px"}}>
            <h4>
                Warning!
            </h4>
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}
export default Page