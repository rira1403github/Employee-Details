import React from 'react';
import logo from './resImgo.jpeg'
import styled  from 'styled-components';
import img from './resImgt.jpeg';
import style from './Our_pillars.css';

function Our_Pillars() {
  return (
    <>
     <Wrap className='contain'>
      <div className='head'>
        <h1>Resources</h1>
      </div>
      <div className='boxes'>
        <div className='box' id="box-1">
          <div className='para-head'>
          <img
              src={logo}
              alt="Description of the Image"/>
          </div>
          <p className='para'>
            Get Access To Videos and <br />Podcasts Related To Latest<br /> ESG Initiatives.
          </p>
        </div>
        <div className='box' id="box-2">
          <div className='para-head'>
          <img
              src={img}
              alt="Description of the Image"/>
          </div>
          <p className='para'>
            Get ESG Related Research<br />Papers for more<br />
            informations.
          </p>
        </div>
        <div className='box' id="box-3">
          <div className='para-head'>
          <img
              src={logo}
              alt="Description of the Image"/>
          </div>
          <p className='para'>
            Have multiple acess to<br />articles and latest<br />happenings
        </p>
        </div>
        
      </div>
     </Wrap>
    </>
  )
}

const Wrap = styled.div`
 margin-top:9rem;
 margin-left:2rem;
 height:90vh;
 width:80%;
`;

export default Our_Pillars;
