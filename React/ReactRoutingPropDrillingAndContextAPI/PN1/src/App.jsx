import React from 'react'
import { lazy } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router";
import Home from './components/Home';
//import Dashboard from lazy(() => import('./components/Dashboard');

import Navigation from './components/Navigation';

const Dashboard = lazy(() => import('./components/Dashboard');


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

//---------------------------------------
// const NavBar = () => {

//   const navigation = useNavigate();
//   return (
//     <div>
//       <button onClick={() => {
//         navigation("/");
//       }}>Home</button>
//       <button onClick={() => {
//         navigation("/dashboard");
//       }}>Deshboard</button>
//     </div>
//   )
// }




export default App
