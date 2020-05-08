import React from "react";
import Car from "./Part2.6.Car";

class Das6 extends React.Component{
    render(){
        return(
            <div>
                <h3>Das6.</h3>
                <Car name="MSD" year={"1212"}>
                    <p style={{color:"red"}}>Color</p>
                </Car>
                <Car name="BMW" year={"1912"}>
                    <p style={{color:"blue"}}>Color</p>
                </Car>
                <Car name="Volo" year={"2015"}>
                    <p style={{color:"pink"}}>Color</p>
                </Car>
                <Car name="Micu" year={"1989"}>
                    <p style={{color:"green"}}>Color</p>
                </Car>
                <Car name="Ford" year={"2011"}>
                    <p style={{color:"gray"}}>Color</p>
                </Car>
            </div>
        )
    }
}
export default Das6