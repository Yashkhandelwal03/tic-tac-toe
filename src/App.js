// import React,{useState} from 'react';
// import './App.css';

// function App(){
//     const [count,setcount] = useState(0);
//     return(
//       <div className="App">
//         <header>
//           <h1>Lets Create Counter App using State</h1>
//         </header>
//         <h2>The current value of Counter is{count}</h2>
//         <button onClick={() =>setcount(0)}>Reset Counter</button>
//         <button onClick={() =>count > 9 ? null :setcount(count +1)}>Increase Counter</button>
//         <button onClick={() =>count < 1 ? null :setcount(count -1)}>Decrease Counter</button>
//       </div>
//     )   
// }

// export default App







// import React,{useState} from 'react';
// import './App.css';
// import Icon from './Components/Icons'

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import { Card,CardBody,Container,Button,Col,Row } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const itemArray = new Array(9).fill('empty');

// function App(){
//     const [isCross,setIsCross] = useState(false);
//     const [winMessage,setWinMessage] = useState("");
//     const reloadGame = () =>{
//       //
//     }
//     const checkIsWinner = () =>{
//       //
//     }
//     const changeItem = itemNumber =>{
//       //
//     }
//     return(
//         <Container className="p-5">
//           <ToastContainer position="bottom-center">
//             <Row>
//               <col md={6} className="offset md-3">
//                 <div className="grid">
//                   {itemArray.map((item,index) =>(
//                     <card>
//                       <CardBody className="box">
//                         <Icon name={item}/>
//                       </CardBody>
//                     </card>
//                     ))
//                   }
//                 </div>
//               </col>
//             </Row>
//           </ToastContainer>
//         </Container>
//     )
// }
// export default App

import React, { useState } from "react";


import Icon from "./Components/Icons";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false)
    setWinMessage("")
    itemArray.fill("empty",0,9)
  };

  const checkIsWinner = () => {
   
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} won`);
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    }
};


  const changeItem = itemNumber => {
    if (winMessage){
      return toast(winMessage,{type:"Success"})
    }

    if(itemArray[itemNumber]==="empty"){
      itemArray[itemNumber] = isCross ? "cross":"circle";
      setIsCross(!isCross);
    }else{
      return toast("already filled",{type:"error"});
    }

    checkIsWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
              <Button color="success" block onClick={reloadGame}>
                Reload the game
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isCross ? "Cross" : "Circle"} turns
            </h1>
          )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card color="warning" onClick={() =>changeItem(index)} >
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};


export default App;
