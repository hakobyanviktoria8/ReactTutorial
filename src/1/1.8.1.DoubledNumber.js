import React from "react";

export default function DoubledNumber(props){
    const  numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
    );
    return (
        <div>
            <h4>
            <ul>{listItems}</ul>
            </h4>
        </div>
    );
}




