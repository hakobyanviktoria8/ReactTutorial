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
                <ToggleButton1 />
                <br/>
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