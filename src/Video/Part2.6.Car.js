import React from "react";

function Car(props) {
   return(
       <div style={{
           border: "1px solid",
           width: "200px",
           padding: "10px",
           textAlign: "center",
           display: "inline-block",
           margin: "20px",
       }}>
           <h2>Name: {props.name}</h2>
           <h2>Year: {props.year}</h2>
           {props.children}
       </div>
   )
}
export default Car