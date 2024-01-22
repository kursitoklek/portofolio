import logo from "./logo.svg";
import "./App.css";
import Myheader from "./header/header";
import Nav from "./nav/nav";
import Education from "./education/education";
import Portofolio from "./portofolio/portofolio";
import Floating from "./floatingButton/floating";
import Footer from "./footer/footer";
import React, { useRef } from 'react';

function App() { 
  const headerRef = useRef();

  
  return (
        <div className="App">
         <Floating></Floating>
         <Nav></Nav>
         <Myheader></Myheader>
         <Education></Education>
         <Portofolio></Portofolio>
         <Footer ></Footer>

        </div>
  );
}

export default App;
