import React from "react";
import img1 from "./img/Screenshot_1.jpg";
import img2 from "./img/Screenshot_2.jpg";
import img3 from "./img/Screenshot_3.jpg";
import img4 from "./img/Screenshot_4.jpg";
import img5 from "./img/Screenshot_5.jpg";
class Introducing extends React.Component{
    render(){
        return(
            <div>
                <h2>1.2.Introducing JSX</h2>
                <p>Ոնենալով name փոփոխականը {} փակագծերի մեջ կկանչենք:</p>
                <img src={img1} alt=""/>
                <hr/>
                <p>element-ի մեջ ստեղծում է h1 տեգ, և կաչում formatName(user) ֆունկցիան, user-ը տալով արգումենտ:</p>
                <img src={img2} alt=""/>
                <hr/>
                <p>src-ին {} մեջ փոփոխական են տալիս ու հետո <b>import user.avatarUrl from "./img/user.avatarUrl.jpg"</b> անում:</p>
                <img src={img3} alt=""/>
                <hr/>
                <p>Մի քանի տեգեր ունենալու դեպքում դրանք պետք էգրել մեկ ընդհանուրի մեջ:</p>
                <img src={img4} alt=""/>
                <hr/>
                <p>2եղանակ գույություն ուն էլեմենտ սարգելու, առավել կիրառելի է 1-ը:</p>
                <img src={img5} alt=""/>
            </div>
        )
    }
}
export default Introducing