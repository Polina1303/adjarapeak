import React from "react";

import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { Header } from "./components/header";
import { ProductPage } from "./pages/product-page";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/app/:title" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
