import React from 'react';
//import logo from './logo.svg';
import './App.css';
import TreeNode from './TreeNode.js'
import { Navbar, NavbarBrand } from 'reactstrap';


function App() {
    var style = {position: "absolute", left: (window.innerWidth/2).toString()+"px", top: "75px"};


  return (
    <div className="App">

        <Navbar dark color="primary">
            <div className="container">
            <NavbarBrand href="/">The Knowledge Model</NavbarBrand>
            </div>
        </Navbar>

        <TreeNode style = {style}/>
    </div>
  );
}

export default App;
