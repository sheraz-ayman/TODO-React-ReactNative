import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Header from './components/partial/Header';
import Home from './pages/Home/Home';
import { useState } from 'react';

function App() {



  return (
    <>
    <BrowserRouter>
    {/* <Header/> */}
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
