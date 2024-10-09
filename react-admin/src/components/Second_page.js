import React from 'react';
import styled from "styled-components";
import style from "./Second_page.css";
import img from "./leaf.JPG";

function Second_page() {
  return (
    <>
     <Div className="container">
      <div className='square-1'>
        <div className='head'>
          <h1>Our Goal?</h1>
          <br />
          <h1>Drive Collection Action,</h1>
          <br />
          <h1>Foster Collaboration.</h1>
        </div>
        <div className='para'>
          <p>Our mission is to empower the next generation of leaders   in<br /> higher education with a deep understanding of   Enviroment,Social, and <br />Governace (ESG) practices.We're   committed to fastering a learning<br/> enviroment that equips   students with the knowledge,tools,and <br />passion to champion   sustainablity.  </p>
        </div>
      </div>
      
      <Wrap className='square-2'>
      </Wrap>
     </Div>
    </>
  )
}

const Div = styled.div`
 margin-bottom:0px;
 color:black;
 height:100vh;
 width:100%;
 background:#f9e5ff;
 display:flex;
 flex-direction:row;
`;

const Wrap = styled.div`
 display:flex;
 flex:0 50%;
 max-width:50%;
 background: #fff0ff;
 background-size:35rem;
 background-position:center;
 background-repeat:no-repeat;
 background-image: url(${img});
`;
export default Second_page
