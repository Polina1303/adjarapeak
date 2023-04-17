import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { Header } from "./components/header";
import { ProductPage } from "./pages/product-page";
import { OrderPage } from "./pages/order-page";
import { Footer } from "./components/footer";
import { Announced } from "./components/announced";

function App() {
  return (
    <div className="App">
      <Announced />
      <Header />
      <Routes>
        <Route exact path="/adjarapeak" element={<HomePage />} />
        <Route exact path="app/:title" element={<ProductPage />} />
        <Route exact path="/order" element={<OrderPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
