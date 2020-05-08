import React from "react";
import Header from "./MountingConstructor";
import Header1 from "./MountingGetDerived";
import Header2 from "./MountingRender";
import Header3 from "./MountingComponentDidMount";
import Header4 from "./UpdatingGetDerivedSFP";
import Header5 from "./UpdateShouldComponentUpdate";
import Header6 from "./UpdateRender";
import Header7 from "./UpdateGetSnapshotBeforeUpdate";
import Header8 from "./UpdateComponentDidUpdate";
import Container from "./UnMountingComponentWillUnM";
import img1 from "./img/Screenshot_1.jpg";
import img2 from "./img/Screenshot_2.jpg";
import img3 from "./img/Screenshot_3.jpg";

function Mounting() {
    return (
        <div>
            <h1>Lifecycle of Components</h1>
            <h2>Mounting</h2>
            <ol>
                <li>constructor()
                    <p>The constructor() method is called with the <b>props</b>, as arguments, and you should always
                        start by calling the <b>super(props)</b> before anything else, this will initiate the parent's
                        constructor method and allows the component to inherit methods from its parent <b>(React.Component)</b>.</p>
                    <pre>constructor(props)  super(props)</pre>
                    <Header />
                    <img src={img1} alt=""/>
                </li>

                <li>getDerivedStateFromProps()
                    <p>It takes <b>state</b> as an argument, and returns an object with changes to the state.</p>
                    <pre><code>
                    static getDerivedStateFromProps(props, state)
                    </code></pre>
                    <Header1 favcol="yellow"/>
                    <img src={img2} alt=""/>
                </li>
                <li>render()
                <p>The render() method is required and will always be called, the others are optional and will be called if you define them.</p>
                <Header2 />
                </li>
                <li>componentDidMount()
                <p>The componentDidMount() method is called after the component is rendered.
                    This is where you run statements that requires that the component is already placed in the DOM.</p>

                    <Header3 /><img src={img3} alt=""/>
                </li>
            </ol>
            <h2>Updating</h2>
            <ol>
                <li>getDerivedStateFromProps()
                <p>This is the first method that is called when a component gets updated.</p>
                <Header4 favcol="yellow"/>
                </li>
                <li>shouldComponentUpdate()
                <p>In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React
                    should continue with the rendering or not.</p>
                <Header5 />
                </li>
                <li>render()
                    <p>The render() method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.</p>
                <Header6 />
                </li>
                <li>getSnapshotBeforeUpdate()
                <p>In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.</p>
                {/*<Header7 />*/}
                </li>
                <li>componentDidUpdate()
                <p>The componentDidUpdate method is called after the component is updated in the DOM</p>
                <Header8 />
                </li>
            </ol>
            <h2>Unmounting</h2>
            <ol>
                <li>componentWillUnmount()
                <p>The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.</p>
                <Container />
                </li>
            </ol>
            <hr/>

        </div>
    )
}
export default Mounting