// import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm';
// import About from './componets/About';
import { useState } from 'react';
import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");

  const togglemode = ()=>{
    if(mode === "light")
    {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(50 61 71)";
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is a amazing mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
    {/* {<Router>
      <Navbar title="TextUtils" about="About" mode={mode} togglemode={togglemode} />
      <Navbar />
      <>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm heading="Enter the text to anaylze below" mode={mode}/>
          </Route>
      </>
    </Router> } */}
    <Navbar title="TextUtils" about="About" mode={mode} togglemode={togglemode} />
    <TextForm heading="Enter the text to anaylze below" mode={mode}/>
    </>
  );
}

export default App;
