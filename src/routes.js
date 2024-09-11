import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './pages/Main';
import Repositorio from './pages/Repositorio';

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/repositorio/:getNameRepo" element={<Repositorio />} />
      </Routes>
    </BrowserRouter>
  );
}
