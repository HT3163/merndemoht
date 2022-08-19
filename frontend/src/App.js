import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CreateProduct from './components/CreateProduct.js'
import GetProduct from './components/GetProduct.js'
import Home from './components/Home.js'

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/createproduct' element={<CreateProduct/>}/>
          <Route exact path='/products' element={<GetProduct/>}/>
        </Routes>
    </Router>
  )
}

export default App;
