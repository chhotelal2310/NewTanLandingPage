import React from "react";
import { Header } from "../src/component/Header";
import { TanHomePage } from "../src/page/TanHomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TanHomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
