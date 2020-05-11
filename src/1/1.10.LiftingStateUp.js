import React from "react";
import img56 from "./img/Screenshot_56.jpg";
import img57 from "./img/Screenshot_57.jpg";
import img58 from "./img/Screenshot_58.jpg";
import img59 from "./img/Screenshot_59.jpg";
import img60 from "./img/Screenshot_60.jpg";
import img61 from "./img/Screenshot_61.jpg";
import img62 from "./img/Screenshot_62.jpg";
import Calculator from "./1.10.1.Calculator";

class LiftingStateUp extends React.Component{
    render(){
        return(
            <div>
                <h2>1.10.Lifting State Up</h2>
                <p>Դիտարկենք հետևյալ օրինակը: Կախված ջերմաստիճանից ասենք ջուրը եռումա թե չէ:</p>
                <img src={img56} alt=""/>
            <Calculator />
                <p>Դիտարկենք Calculator կոմպոնենտը, որը input-ով կստանա temperature-ը և կստուգի այն կանչելով BoilingVerdict</p>
                <img src={img57} alt=""/>
                <p>Calculator-ը փոխենք  TemperatureInput component-ի: Ավելացնենք scale -scaleNames օբեկտը:</p>
                <img src={img58} alt=""/>
                <p>Իսկ Calculator-ը կունենա այս տեսքը:</p>
                <img src={img59} alt=""/>
                <p>Add 2 function celsius -> fahrenheit</p>
                <img src={img60} alt=""/>
                <p>These two functions convert numbers. We will write another function that takes a string temperature and a converter function as arguments and returns a string.</p>
                <img src={img61} alt=""/>
                <p>Another changing </p>
                <img src={img62} alt=""/>
            </div>
        )
    }
}
export default LiftingStateUp