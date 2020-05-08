import React from "react";
import NameForm from "./1.9.1NameForm";
import img49 from "./img/Screenshot_49.jpg";
import img50 from "./img/Screenshot_50.jpg";
import img51 from "./img/Screenshot_51.jpg";
import img52 from "./img/Screenshot_52.jpg";
import img53 from "./img/Screenshot_53.jpg";
import TextArea from "./1.9.2.TextArea";
import Selected from "./1.9.3.Selected";

class Forms extends React.Component{
    render(){
        return(
            <div>
                <h2>1.9.Forms</h2>
                <p>HTML-ումs input, textarea և select էլեմենտների արժեքները կարող էինք փոխել value-ով, սակայն այստեղ նրանց հասնելու և արժեքը փոխելու համար կօգտագործենք <b>setState()</b></p>
                <p>Form-ի սեղմելու ժամանակ պետք է ունենանք  controlled component, որը կուղարկի ֆորմի պարունակությունը:</p>
                <img src={img49} alt=""/>
                <NameForm />
                <hr/>
                <p>Textarea-ի դեպքում էլ պետք է value փոխենք setState-ի միջոցով:</p>
                <img src={img50} alt=""/>
                <TextArea />
                <hr/>
                <p>In HTML, <b>select</b> creates a drop-down list.</p>
                <img src={img51} alt=""/>
                <p> React, instead of using this <mark>selected</mark> attribute, uses a <mark><b>value</b></mark> attribute on the root select tag.</p>
                <img src={img52} alt=""/>
                <Selected />
                <img src={img53} alt=""/>
            </div>
        )
    }
}
export default Forms