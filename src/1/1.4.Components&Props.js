import React from "react";
import img8 from "./img/Screenshot_8.jpg";
import img9 from "./img/Screenshot_9.jpg";
import img10 from "./img/Screenshot_10.jpg";
import img11 from "./img/Screenshot_11.jpg";
import img12 from "./img/Screenshot_12.jpg";
import img13 from "./img/Screenshot_13.jpg";
import img14 from "./img/Screenshot_14.jpg";
import img15 from "./img/Screenshot_15.jpg";
import img16 from "./img/Screenshot_16.jpg";
import img17 from "./img/Screenshot_17.jpg";
import img18 from "./img/Screenshot_18.jpg";
import img19 from "./img/Screenshot_19.jpg";
import Welcome1 from "./1.4.1.Welcome1";
import Welcome2 from "./1.4.2.Welcome2";
import Comment from "./1.4.3.SplitComponent";

class ComponentsProps extends React.Component{
    render(){
        return(
            <div>
                <h2>1.4.Components and Props</h2>
                <p>Ամբողջ էջը բաժանել ինքնագոյատևող կտորների միտքը հանգեցրեց component-ների առաջացմանը:</p>
                <p>components նման են JavaScript function-ներին և պարտադիր ունենում են props հատկություն:</p>
                <p>Լինում են 2 տեսակ՝ <b>Function և Class Components</b></p>
                <p><b>- Component-ները միշտ գրվում են ՄԵԾԱՏԱՌՈՎ:</b></p>
                <p><b>- Ունենում են Props հատկություն:</b> Props Read-Only են միան, որի արդյունքում Ֆ վերադարձնում են նույն արժեքը և կչ են <b> “pure”</b></p>
                <p>- Անպայման <b>return</b> են անում արժեքը</p>
                <img src={img19} alt=""/>
                <ol>
                    <li>
                        <h3>Function Components</h3>
                        <img src={img8} alt=""/>
                        <hr/>
                        <p>Component-ը կանչելուց պարտադիր պետք է փոխանցել այն արգումենտները, որոնք Component-ը սպասում է:<br/>
                        Տվյալ դեպքում <b>props.name</b> կանչելուց տալիս ենք <b>name="Sara"</b>:</p>
                        <img src={img10} alt=""/>
                        <Welcome1 name="Sara"/>
                        <img src={img11} alt=""/>
                        <hr/>
                        <p>Component-ները կարող են ներդրված Component-ներ պարունակել և կանչել նույն Component ինչքան անհրաժեշտ է:  </p>
                        <img src={img12} alt=""/>
                        <Welcome2 />
                        <hr/>
                        <p>Դիտարկենք այս ֆունկցիան, այն բաժանենք Component-ների</p>
                        <a href="https://codepen.io/pen?&editable=true&editors=0010">Սկզբնական վիճակ</a>
                        <br/><a href="https://codepen.io/pen?&editable=true&editors=0010">վերջնական վիճակ</a>
                        <br/><img src={img13} alt=""/>
                        <p>1առանձնացնենք նկարի կտորը</p>
                        <img src={img14} alt=""/>
                        <p>Ու հետո կանչենք <b>Avatar user=props.author</b></p>
                        <img src={img15} alt=""/>
                        <p>Առանձնացնեք նաև UserInfo, որը կպարունակի Avatar component-ը և props.user.name:</p>
                        <img src={img17} alt=""/>
                        {/*<Comment />__________________________________________????????????*/}
                        <p>Մեր վերջնական Comment-ը կլինի հետևյալը:</p>
                        <img src={img18} alt=""/>
                        <hr/>
                        <p>Կարող ենք UserInfo մի կտոր սարգել</p>
                        <img src={img16} alt=""/>
                    </li>
                    <li>
                        <h3>Class Components</h3>
                        <img src={img9} alt=""/>
                    </li>
                </ol>
            </div>
        )
    }
}
export default ComponentsProps