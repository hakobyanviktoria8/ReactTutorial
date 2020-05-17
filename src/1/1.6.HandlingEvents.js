import React from "react";
import img29 from "./img/Screenshot_29.jpg";
import img30 from "./img/Screenshot_30.jpg";
import img31 from "./img/Screenshot_31.jpg";
import img32 from "./img/Screenshot_32.jpg";
import img33 from "./img/Screenshot_33.jpg";
import ToggleButton1 from "./1.6.1.ToggleButton1";

class HandlingEvents extends React.Component{
    render(){
        return(
            <div>
                <h2>1.6.Handling Events</h2>
                <p>React events are named using <b>camelCase</b></p>
                <img src={img29} alt=""/>
                <hr/>
                <p>Another difference is that you cannot return <b>false</b> to prevent default behavior in React.</p>
                <p style={{textAlign : "center"}}>In HTML, to prevent the default link</p>
                <img src={img30} alt=""/>
                <hr/>
                <p>When using React, we don’t need to call <b>addEventListener</b> to add listeners to a DOM element after it is created. </p>
                <p>this Toggle component renders a button that lets the user toggle between “ON” and “OFF” states:</p>
                <ToggleButton1 />
                <br/>
                <p> In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and
                    pass it to onClick, this will be undefined when the function is actually called.</p>
                <img src={img31} alt=""/>
                <hr/>
                <p>Առանց bind-ի 2եղանակ կա this-ը ստանալու:
                    <br/> Class fields syntax </p>
                <img src={img32} alt=""/>
                <p>use an arrow function in the callback</p>
                <img src={img33} alt=""/>
            </div>
        )
    }
}
export default HandlingEvents