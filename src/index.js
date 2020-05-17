import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom';
import './index.css';
import { Button } from 'reactstrap';

// import App from './App';
import First from "./1/First";
import Video from "./Video/Video";
// import ButtonOnClick from "./Project/buttonOnClick";
import Sevagir from "./Sevagir/Sevagir";
import Second from "./2/Second";
import Clock1 from "./1/1.5.1Clock1";
import Four from "./4/Hooks";
// import TodoApp from "./ToDoInPuT/ToDoLIst";
// import ToDoRender from "./Sevagir/NewWayToDo";
// import Timer from "./Timer+/Timer";

//<App />
// <Timer />
//<Sevagir />
//<TodoApp />
//<ToDoRender />*
// <Video />
//<ButtonOnClick />

ReactDOM.render(
    <div>
        {/*<Button color="danger">Danger!</Button>*/}
        {/*<First />*/}
        <br/><hr/><br/>
        <Second />
        <br/><hr/><br/>
        <Four />
        {/*<Sevagir />*/}
    </div>,
  document.getElementById('root')
);

