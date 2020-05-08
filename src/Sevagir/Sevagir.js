import React from "react";
// import Message from "./Message";
import Log from "./LoginLogoutButton";
import ShowHideButton from "./ShowHideButton";
// import GreetingUser from "./GreatingUser";
// import LoginLogoutButtuon from "./LoginLogoutButton";

//<LoginLogoutButtuon  isLogIn = {true}/> //function
//<GreetingUser isLogin = {false} />
//<Log />

// const mess = ["123","qwe","www","wsddd","fsaa","saklkjas"];
//<Message mess={mess} />




class Sevagir extends React.Component{
    render(){
        return(
            <div style={{border:"5px solid"}}>
                <Log />
                <hr/>
                <ShowHideButton />
            </div>
        )
    }
}
export default Sevagir