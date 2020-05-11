import React from "react";
import FilterableProductTable from "../Project/LiveData";

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
class ThinkingInReact extends React.Component{
    render(){
        return(
            <div>
                <h2>1.12.Thinking In React</h2>

                <FilterableProductTable products={PRODUCTS}/>
            </div>
        )
    }
}

export default ThinkingInReact