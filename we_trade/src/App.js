import React from "react";
import {  BrowserRouter,Routes, Route } from 'react-router-dom';

import Home from "./components/Home/Home";
import ResetPassword from "./components/ResetPassword/ResetPAssword";
function App() {

  return (
      <BrowserRouter>
   <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reset" element={<ResetPassword />} />
      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
