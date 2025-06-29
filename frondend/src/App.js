import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { SalePage } from "./pages/sale-page";
import { SaleFoodPage } from "./pages/sale-food-page";
import { SeaSalePage } from "./pages/sea-sale-page";
import { RentPage } from "./pages/rent-page";
import { Header } from "./components/header";
import { ProductPage } from "./pages/product-page";
import { TripPageOneDay } from "./pages/trip-page-one-day/trip-page-one-day";
import { TripPageTwoDay } from "./pages/trip-page-two-day/trip-page-two-day";
import { EndSeason } from "./pages/end-season/end-season";
import { Transfer } from "./pages/transfer/transfer";
import { TripPage } from "./pages/trip-page/trip-page";
import { LakeRoutePage } from "./pages/lake-route-page";
import { GardenRoutePage } from "./pages/garden-route-page";
import { ErgeRoutePage } from "./pages/erge-route-page";
import { SportSalePage } from "./pages/sport-sale-page";

import { OrderPage } from "./pages/order-page";

import { Error } from "./pages/error-page/error-page";

import { Footer } from "./components/footer";

import { RulesPage } from "./pages/rules-page";

import { LycianWayPage } from "./pages/lycianWay-page";
import { RockClimbingPage } from "./pages/rock-climbing-page";
import { RentSkyPage } from "./pages/rent-sky-page";
import { ReturnPolicyPage } from "./pages/return-policy-page/return-policy-page";
import { HikhaniTripPage } from "./pages/hihani-page";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/sale" element={<SalePage />} />
          <Route exact path="/sale_food" element={<SaleFoodPage />} />
          <Route exact path="/sale_sea" element={<SeaSalePage />} />
          <Route exact path="/sport_sale" element={<SportSalePage />} />
          <Route exact path="/rent" element={<RentPage />} />
          <Route exact path="/rent_ski" element={<RentSkyPage />} />
          <Route exact path="/one_day_trip" element={<TripPageOneDay />} />
          <Route exact path="/two_day_trip" element={<TripPageTwoDay />} />
          <Route exact path="/end-season" element={<EndSeason />} />
          <Route exact path="/transfer" element={<Transfer />} />
          <Route exact path="/trip" element={<TripPage />} />
          <Route exact path="app/:id" element={<ProductPage />} />
          <Route exact path="/order" element={<OrderPage />} />
          <Route exact path="/rules" element={<RulesPage />} />
          <Route exact path="/lycian" element={<LycianWayPage />} />
          <Route exact path="/rockClimbing" element={<RockClimbingPage />} />
          <Route exact path="/lake" element={<LakeRoutePage />} />
          <Route exact path="/erge" element={<ErgeRoutePage />} />
          <Route exact path="/garden" element={<GardenRoutePage />} />
          <Route exact path="/hikhani" element={<HikhaniTripPage />} />
          <Route exact path="*" element={<Error />} />
          <Route exact path="/return_policy" element={<ReturnPolicyPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
