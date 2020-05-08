import React from "react";
import Football from "./BindThis";
import Football1 from "./BindThisRegFunct";
import AnonymousFunc from "./sendAnonymousFunction";
import BindEventThis from "./BindEventThis";

class Event extends React.Component{
    render(){
        return(
            <div>
                <h2>Events</h2>
                <p>Ete Arrow Function enq ogtagorcum inq@ vercnum e ira verevum gtnvac Football object@.</p>
                <Football />
                <p>Sovorakan functioni depqum petq e bind-kapel this@</p>
                <Football1 />
                <hr/>
                <h2>If you want to send parameters into an event handler, you have two options:</h2>
                <h3>1. Make an anonymous arrow function:</h3>
                <AnonymousFunc />
                <h3>2. Bind the event handler to this.</h3>
                <BindEventThis />
            </div>
        )
    }
}
export default Event