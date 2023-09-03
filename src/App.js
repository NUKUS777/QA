import React, { useContext } from "react";
import { styled } from "styled-components";
import SearchField from "./SearchField";
import Modal from "./Modal";
import QA from "./QA";
import './App.css'
import Footer from "./Footer";
import { useState } from "react";
import {data} from './data'
import MyProvider, { MyContext } from "./MyContext";
import MyConsumer from "./MyConsumer";
function App() {
  const [randomNumber,setRandomNumber]=useState(1)
  const Random = () => {
    setRandomNumber( Math.floor(Math.random()*(data.length)))
  }
  const [modal,setModal]= useState(true);

  return (
    <MyProvider>
     {modal?  <Divv>
       <SearchField />
       <MyConsumer />
       <div className="btnContainer">
         <Btn onClick={Random}>
          Random question
         </Btn>
         <Btn onClick={()=>{setModal(!modal)}}>
           Add your question
         </Btn>
       </div>
       <QA data={data} randomNumber={randomNumber}/>
       <Footer />
    </Divv> :  <Modal modal={modal} setModal={setModal} />}
    </MyProvider>
  ) 
}

const Divv = styled.div`
  background: rgb(48, 119, 226);
  margin:0 auto;
  padding:0;
  max-width: 100%;
  min-height:100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  position: relative;
`
const Btn = styled.button`
 width:180px;
 padding:14px;
 border:3px solid transparent;
 border-radius: 6px;
 font-size:17px;
 color: rgba(37, 36, 36, 0.682);
 cursor: pointer;
 &:hover {
  transition:1s ;
  transform:scale(1.05);
  color: yellow;
  background: #000;
  border:3px solid yellow;
 }
 
`
export default App;