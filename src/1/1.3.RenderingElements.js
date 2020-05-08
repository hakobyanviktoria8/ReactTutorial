import React from "react";
import img6 from "./img/Screenshot_6.jpg"
import img7 from "./img/Screenshot_7.jpg"

class RenderingElements extends React.Component{
    render(){
        return(
            <div>
                <h2>1.3.Rendering Elements</h2>
                <p>React-ի էլեմենտների արժեքները անփոխարինելի եմ: React-ը թարմացնում է կոդի միայն այն կտորները որոնք փոփոխվում են:</p>
                <p>Ամեն վարկյանը մեկ կկանչի tick ֆունկցիան փոփոխելով վարկյանները:</p>
                <a href="https://codepen.io/pen?&editable=true&editors=0010">Link</a>
                <img src={img6} alt=""/>
                <img src={img7} alt=""/>
            </div>
        )
    }
}
export default RenderingElements