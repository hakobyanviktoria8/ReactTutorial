import React from "react";

function UserGreeting(props) {
    return <h4>Welcome User</h4>
}

function GuestGreeting(props) {
    return <h4>Welcome Guest!</h4>
}

export  default function GreetingUser(props) {
    const isLogin =props.isLogin;
    return isLogin ? <UserGreeting /> : <GuestGreeting />
}