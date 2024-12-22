import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { SalePage } from "./pages/sale-page";
import { RentPage } from "./pages/rent-page";
import { Header } from "./components/header";
import { ProductPage } from "./pages/product-page";
import { TripPage } from "./pages/trip-page/trip-page";
import { LakeRoutePage } from "./pages/lake-route-page";
import { GardenRoutePage } from "./pages/garden-route-page";
import { ErgeRoutePage } from "./pages/erge-route-page";

import { OrderPage } from "./pages/order-page";

import { Error } from "./pages/error-page/error-page";

import { Footer } from "./components/footer";

import { RulesPage } from "./pages/rules-page";

import { LycianWayPage } from "./pages/lycianWay-page";
import { RockClimbingPage } from "./pages/rock-climbing-page";
import { RentSkyPage } from "./pages/rent-sky-page";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/sale" element={<SalePage />} />
        <Route exact path="/rent" element={<RentPage />} />
        <Route exact path="/rent_ski" element={<RentSkyPage />} />
        <Route exact path="/trip" element={<TripPage />} />
        <Route exact path="app/:id" element={<ProductPage />} />
        <Route exact path="/order" element={<OrderPage />} />
        <Route exact path="/rules" element={<RulesPage />} />
        <Route exact path="/lycian" element={<LycianWayPage />} />
        <Route exact path="/rockClimbing" element={<RockClimbingPage />} />
        <Route exact path="/lake" element={<LakeRoutePage />} />
        <Route exact path="/erge" element={<ErgeRoutePage />} />
        <Route exact path="/garden" element={<GardenRoutePage />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
