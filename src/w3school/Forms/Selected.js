import  React from "react";
class Selected extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mycar: 'Volvo'
        };
    }
    render() {
        return (
            <form>
                <select value={this.state.mycar}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select>
            </form>
        );
    }
}
export default Selected