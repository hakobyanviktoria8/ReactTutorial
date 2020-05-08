import React from "react"
import Introducing from "./1.2.IntroducingJSX";
import RenderingElements from "./1.3.RenderingElements";
import ComponentsProps from "./1.4.Components&Props";
import CreateNewReactApp from "./1.1.CreateNewReactApp";
import StateLifecycle from "./1.5.State&Lifecycle";
import Forms from "./1.9.Forms";
import ListsKeys from "./1.8.Lists&Keys";
import ConditionalRendering from "./1.7.ConditionalRendering";
import HandlingEvents from "./1.6.HandlingEvents";
import ThinkingInReact from "./1.12.ThinkingInReact";
import CompositionInheritance from "./1.11.CompositionInheritance";
import LiftingStateUp from "./1.10.LiftingStateUp";
class First extends React.Component{
    render(){
        return(
            <div>
                <h1>1.MAIN CONCEPTS</h1>
                <CreateNewReactApp />
                <Introducing />
                <RenderingElements />
                <ComponentsProps />
                <StateLifecycle />
                <HandlingEvents />
                <ConditionalRendering />
                <ListsKeys />
                <Forms/>
                <LiftingStateUp />
                <CompositionInheritance/>
                <ThinkingInReact />
            </div>
        )
    }
}
export default First