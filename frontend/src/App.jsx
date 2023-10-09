import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <dir>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </dir>
    </>
  );
};

export default App;
