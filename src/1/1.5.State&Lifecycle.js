import React from "react";
import img20 from "./img/Screenshot_20.jpg";
import img21 from "./img/Screenshot_21.jpg";
import img22 from "./img/Screenshot_22.jpg";
import img23 from "./img/Screenshot_23.jpg";
import img24 from "./img/Screenshot_24.jpg";
import img25 from "./img/Screenshot_25.jpg";
import img26 from "./img/Screenshot_26.jpg";
import img27 from "./img/Screenshot_27.jpg";
import img28 from "./img/Screenshot_28.jpg";
import Clock1 from "./1.5.1Clock1";

class StateLifecycle extends React.Component{
    render(){
        return(
            <div>
                <h2>1.5.State and Lifecycle</h2>
                <h3>1.5.1.Clock example</h3>
                <p>Դիտարկենք հետևյալ օրինակը և այն փոխարինենք ամբողջությամբ React-ի:</p>
                <a href="https://codepen.io/gaearon/pen/gwoJZk?editors=0010">Սկզբնական վիճակ</a>
                <br/><img src={img20} alt=""/>
                <img src={img21} alt=""/>
                <hr/>
                <p>1-ինը առանձնացնենք Clock Ֆ:Կանչի ժամանակ փոխանցելով date-ը, որը component-ը օգտագործել է:</p>
                <Clock1 date={new Date()} />
                <img src={img22} alt=""/>
                <p>Function component-ը փոխենք class-ի ու քանի որ props հտկություն չենք փոխանցում, այստեղ կկանչենք <b>this.props.date.toLocaleTimeString()</b></p>
                <img src={img23} alt=""/>
                <p>date-ի արժեքը կարող ենք փոփոխել 3քայլով: </p>
                <p><b>1.this.props.date</b> փոխենք <b>this.state.date</b></p>
                <img src={img24} alt=""/>
                <p>2.Ավելացնում ենք constructor-ը իրա this.state-ով, state-ը property-ների objecta</p>
                <p>3.Component-ը կանչելուց այլևս date չենք փոխանցում: </p>
                <img src={img25} alt=""/>
                <p>Ավելացնենք մի քանի մեթոդ՝</p>
                <img src={img26} alt=""/>
                <p><b>componentDidMount</b>, որը setInterval-ով մեկ վրկ մեկ կկանչի tick()ֆունկցիան տպելով նոր ժամը: Այս փուլը կոչվում է <b>Mounting</b></p>
                <p><b>componentWillUnmount</b>, այս մեթոդը clearInterval-ով նախագծված component-ը Unmount կանի:</p>
                <p><b>setState</b> մեթոդի շնորհիվ կարող ենք փոփոխել state-ի մեջ եղած date-ի արժեքը:</p>
                <h3>1.5.2.Using State Correctly</h3>
                <p>State-ի մեջ եղած փոփոխականները չի կարելի փոփոխել սովորական property-իների նման: Դրա համար գոյություն ունի <b>setState</b></p>
                <img src={img27} alt=""/>
                <p>state-ը գրվում է constructor-ի մեջ: state-ը թարմացվում է <b>Asynchronous</b></p>
                <img src={img28} alt=""/>
            </div>
        )
    }
}
export default StateLifecycle