import React from "react";
import styled from "styled-components";
import style from "./Navbar.css";
import img from "./handss.png";
import { Link, useNavigate } from "react-router-dom";
import Discover from "./Discover";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  const handleClick1 = () => {
    window.location.href = 'https://investor-2-0.vercel.app/';
  };

  const visitDiscover = () => {
    navigate("/discover");
  };

  return (
    <>
      <Nav className="main-nav">
        <div className="nav-logo">
          <h3>SEVA-Connect</h3>
        </div>
        <Div className="nav-main">
          <div className="about">
            <h3>About us</h3>
          </div>
          <div className="about">
            <h3>Events</h3>
          </div>
          <div className="Resources">
            <h3>Resources</h3>
          </div>
        </Div>
        <div className="buttons" style={{ marginLeft: 602 }}>
          <button onClick={handleClick} className="btn" id="btn-2">
            Log In/Sign In
          </button>
        </div>
         {/* <button onClick={handleClick1} className="btn" id="btn-2">
            Ongoing Projects
          </button> <div className="buttons"> */}
        
        {/* </div> */}
      </Nav>
      <Main className="main-page">
        <div className="box-1">
          {/* <div className="heading">
            <h1>Sustainablity</h1>
            <br />
            <h1>Social,</h1>
            <br />
            <h1>Igniting Change</h1>
          </div> */}
          <div className="head-main">
            {/* <p style={{fontFamily:'sans-serif',fontSize:'25px'}}>
              Our ESG Dashboard revalutionizes higer education by <br />{" "}
              harmonizing data-driven insights with visionary action.
              <br /> Unlock the Power of Sustainablity.Join us in shaping a{" "}
              <br />
              greener, more socially conscious tomorrow
            </p> */}
          </div>
          {/* <button className="btn" id="dash-btn" onClick={visitDiscover}>
            Discover More
          </button> */}
        </div>
        <Wrap className="box-2"></Wrap>
      </Main>
    </>
  );
};

const Nav = styled.nav`
  margin: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  width: 100%;
`;

const Wrap = styled.div`
  display: flex;
  flex: 0 50%;
  max-width: 50%;
  flex-direction: row;
  background-image: url(${img});
  background-size: 38rem;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 2;
`;

export default Navbar;
