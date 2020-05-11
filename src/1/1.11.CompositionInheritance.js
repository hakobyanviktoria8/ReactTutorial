import React from "react";
import img63 from "./img/Screenshot_63.jpg";
import img64 from "./img/Screenshot_64.jpg";
import img65 from "./img/Screenshot_65.jpg";
import img66 from "./img/Screenshot_66.jpg";
import img67 from "./img/Screenshot_67.jpg";
import img68 from "./img/Screenshot_68.jpg";
import img69 from "./img/Screenshot_69.jpg";
import img70 from "./img/Screenshot_70.jpg";
import img71 from "./img/Screenshot_71.jpg";
import img72 from "./img/Screenshot_72.jpg";
import WelcomeDialog from "./1.11.1FancyBorder";
import App from "./1.11.2SplitPain";
import Dialog from "./1.11.3.Dialog";
import SignUpDialog from "./1.11.4.SignUpDialog";

class CompositionInheritance extends React.Component{
    render(){
        return(
            <div>
                <h2>1.11.Composition vs Inheritance</h2>
                <p>React-ը հիմնված է component-ների վրա, միշտ նախընտրելի է նոր component-ը, քան ժառանգումը:</p>
                <p>Componenti children-ներին վերցնելու համար <b>children</b>, որը կնդգրկի իրա բոլոր երեխաներին:</p>
                <img src={img63} alt=""/>
                <img src={img64} alt=""/>
                <p>Another way style</p>
                <img src={img65} alt=""/>
                <img src={img66} alt=""/>
                <img src={img68} alt=""/>
                <img src={img69} alt=""/>

                <p>Սա կօգտագործվի նմանատիպ սթայլ տալու համար էլեմենտներին:</p>
        <WelcomeDialog />
                <hr/>
                <p>Դիտարկենք մեկ այլ օրինակ left --> right side</p>
                <img src={img67} alt=""/>
                <App />
                <hr/>
        <Dialog />
                <img src={img70} alt=""/>
                <hr/>
                <p>Դիտարկենք հետևյալ օրինակը</p>
                <img src={img71} alt=""/>
                <img src={img72} alt=""/>
        <SignUpDialog />



            </div>
        )
    }
}
export default CompositionInheritance