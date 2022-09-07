import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { Header } from "./components/header";
import { ProductPage } from "./pages/product-page";
import { OrderPage } from "./pages/order-page";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/adjarapeak" element={<HomePage />} />
        <Route exact path="app/:title" element={<ProductPage />} />
        <Route exact path="/order" element={<OrderPage />} />
      </Routes>
    </div>
  );
}

export default App;
