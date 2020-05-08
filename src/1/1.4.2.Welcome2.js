import React from "react";
function W2(props) {
    return <h4>Hello, {props.name}</h4>;
}

class Welcome2 extends React.Component{
    render(){
        return (
            <div>
                <W2 name="Sara" />
                <W2 name="Cahal" />
                <W2 name="Edite" />
            </div>
        )
    }
}
export default Welcome2