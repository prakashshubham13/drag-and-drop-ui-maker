import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './../Page/LandingPage';
import Dashboard from './../Dashboard';
import PreviewScreen from './../Page/PreviewScreen';


const MyRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="preview" element={<PreviewScreen/>}/>
    <Route path="*" element={<h1>No Page</h1>} />
    </Routes>
  </BrowserRouter>
  )
}

export default MyRouter
