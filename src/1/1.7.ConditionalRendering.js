import React from "react";
import Greeting from "./1.7,1.Greeting";
import img34 from "./img/Screenshot_34.jpg"
import img35 from "./img/Screenshot_35.jpg"
import img36 from "./img/Screenshot_36.jpg"
import img37 from "./img/Screenshot_37.jpg"
import img38 from "./img/Screenshot_38.jpg"
import img39 from "./img/Screenshot_39.jpg"
import img40 from "./img/Screenshot_40.jpg"
import img43 from "./img/Screenshot_43.jpg"
import LoginControl from "./1.7.2.LoginControl";
import Mailbox from "./1.7.3Mailbox";
import Page from "./1.7.4.ShowHide";

class ConditionalRendering extends React.Component{
    render(){
        const messages = ['React', 'Re: React', 'Re:Re: React'];

        return(
            <div>
                <h2>1.7.Conditional Rendering</h2>
                <p>Consider these two components:</p>
                <img src={img34} alt=""/>
                <p>Կստեղծենք Greeting component-ը , որը ցույց կտա  user is <b>logged in</b>է թե ոչ:</p>
                <img src={img35} alt=""/>
                <Greeting isLoggedIn={false} />
                <hr/>
                <p>Դիտարկենք մեկ այլ օրինակ Login և Logout button :</p>
                <img src={img36} alt=""/>
                <img src={img37} alt=""/>
                <LoginControl />
                <hr/>
                <p>Դիտարկենք մեկ այլ օրինակ Mail box: <b>Logical && Operator</b></p>
                <img src={img38} alt=""/>
                <Mailbox unreadMessages={messages} />
                <p>It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false.</p>
                <hr/>
                <p>Դիտարկենք մեկ այլ օրինակ if-else Conditional Operator: debuggercondition ? true : false.</p>
                <img src={img39} alt=""/>
                <p>Այն կարող է օգտագործվել նաև մեծ կոդերի դեպքում:</p>
                <img src={img40} alt=""/>
                <hr/>
                <p><b>Preventing Component from Rendering</b> - կանխել կոմպոնենտի մատուցումը:</p>
                <img src={img43} alt=""/>
                <Page />







            </div>
        )
    }
}
export default ConditionalRendering