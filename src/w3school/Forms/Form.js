import  React from "react";
import OnChangeInputName from "./OnChangeInputName";
import img1 from "./img/Screenshot_4.jpg";
import img2 from "./img/Screenshot_2.jpg";
import img3 from "./img/Screenshot_1.jpg";
import img4 from "./img/Screenshot_3.jpg";
import img5 from "./img/Screenshot_5.jpg";
import img6 from "./img/Screenshot_6.jpg";
import img7 from "./img/Screenshot_7.jpg";
import img8 from "./img/Screenshot_8.jpg";
import img9 from "./img/Screenshot_9.jpg";
import MyForm1 from "./MyFormPopoxakanov";
import MyForm2 from "./MyForm2";
import MultipleChanges from "./MultipleChanges";
import ValidityState from "./ValidateInput";
import ValidationSubmitButton from "./ValidationSubmitButton";
import Selected from "./Selected";
import ErrorMessage from "./ErrorMessage";
import Textarea1 from "./Textarea";

class MyForm extends React.Component{
    render(){
        return (
            <div>
                <h1>My Form</h1>
                <p>Texum avelacnuma inputi name</p>
                <img src={img1} alt=""/>
                <OnChangeInputName />
                <hr/>
                <h3>Popoxakani headerin tanq stugel@ userName ka te che</h3>
                <MyForm1 />
                <img src={img3} alt=""/>
                <hr/>
                <h3> event.preventDefault() uxarkuma stacac tvyal@</h3>
                <MyForm2 />
                <img src={img2} alt=""/>
                <hr/>
                <h2>Multiple Input Fields</h2>
                <p>Մի քանի input field դաշտերի դեպքում name attribute ավելացնենք էլեմենտներին:</p>
                <p>To access the fields in the event handler use the event.target.name and event.target.value syntax.</p>
                <MultipleChanges />
                <img src={img4} alt=""/>
                <hr/>
                <h2>Validity State Input</h2>
                <p>Եթե age -ի դաշտում տառ գրենք, չթողնի</p>
                <ValidityState />
                <img src={img5} alt=""/>
                <hr/>
                    <p>Buttonov kazmakerpac validation</p>
                    <ValidationSubmitButton />
                <img src={img6} alt=""/>
                <hr/>
                    <h2>Adding Error Message</h2>
                    <ErrorMessage />
                <img src={img9} alt=""/>
                <hr/>
                    <h2>Textarea</h2>
                    <p>React-um <b>textarean</b> unenum e value, vor mech el pahvum e arjeq@</p>
                    {/*<Textarea1 />*/}
                <img src={img7} alt=""/>
                <hr/>
                    <h2>Select</h2>
                    <p>Reactum seleced@ talis enq eli valueov</p>
                    {/*<Selected />*/}
                <img src={img8} alt=""/>
            </div>)
    }
}
export  default MyForm