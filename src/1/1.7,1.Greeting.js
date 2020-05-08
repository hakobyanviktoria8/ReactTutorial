import React from "react";

function UserGreeting(props) {
    return <h4>Welcome back!</h4>;
}

function GuestGreeting(props) {
    return <h4>Please sign up.</h4>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

// class Greeting extends React.Component{
//
//     render(){
//         return(
//             <div>
//
//             </div>
//         )
//     }
// }
export default Greeting