import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { SalePage } from "./pages/sale-page";
import { DiscountPage } from "./pages/discount-page";
import { SaleFoodPage } from "./pages/sale-food-page";
import { SeaSalePage } from "./pages/sea-sale-page";
import { RentPage } from "./pages/rent-page";
import { Header } from "./components/header";
import { ProductPage } from "./pages/product-page";
import { ClothesPage } from "./pages/clothes-page";
import { TripPageOneDay } from "./pages/trip-page-one-day/trip-page-one-day";
import { TripPageTwoDay } from "./pages/trip-page-two-day/trip-page-two-day";
import { Transfer } from "./pages/transfer/transfer";
import { TripPage } from "./pages/trip-page/trip-page";
import { SvanetiTripPage } from "./pages/svaneti-page";
import { LakeRoutePage } from "./pages/lake-route-page";
import { GardenRoutePage } from "./pages/garden-route-page";
import { ErgeRoutePage } from "./pages/erge-route-page";
import { SportSalePage } from "./pages/sport-sale-page";
import { KazbegPage } from "./pages/kazbeg-page";
import { UdziroPage } from "./pages/udziro-page";
import { GoderdziMountingTripPage } from "./pages/goderdzi_mounting-page";
import { GreenlakePage } from "./pages/greenlake-page";
import { BakhmaroPage } from "./pages/bakhmaro-page";
import { GomismtaChinchaoPage } from "./pages/gomismta_chinchao-page";
import { GuriaTeaPage } from "./pages/guriaTea-page";
import { MagaPage } from "./pages/maga-page";

import { OrderPage } from "./pages/order-page";

import { Error } from "./pages/error-page/error-page";

import { Footer } from "./components/footer";

import { RulesPage } from "./pages/rules-page";

import { LycianWayPage } from "./pages/lycianWay-page";
import { RockClimbingPage } from "./pages/rock-climbing-page";
import { RentSkyPage } from "./pages/rent-sky-page";
import { ReturnPolicyPage } from "./pages/return-policy-page/return-policy-page";
import { HikhaniTripPage } from "./pages/hihani-page";
import { TeaTripPage } from "./pages/tea-page";
import { UchkhoTripPage } from "./pages/uchkho-page";
import { JvarimindoriTripPage } from "./pages/jvarimindori-page";
import { TbikeliTripPage } from "./pages/tbikeli-page";
import { MartviliTripPage } from "./pages/martvili-page";
import { YogaGomismtaPage } from "./pages/yoga-gomismta-page";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/sale" element={<SalePage />} />
          <Route exact path="/discount" element={<DiscountPage />} />
          <Route exact path="/sale_food" element={<SaleFoodPage />} />
          <Route exact path="/sale_sea" element={<SeaSalePage />} />
          <Route exact path="/sport_sale" element={<SportSalePage />} />
          <Route exact path="/rental" element={<SportSalePage />} />
          <Route exact path="/rent" element={<RentPage />} />
          <Route exact path="/rent_sky" element={<RentSkyPage />} />
          <Route exact path="/one_day_trip" element={<TripPageOneDay />} />
          <Route exact path="/clothes" element={<ClothesPage />} />
          <Route exact path="/two_day_trip" element={<TripPageTwoDay />} />
          <Route exact path="/transfer" element={<Transfer />} />
          <Route exact path="/trip" element={<TripPage />} />
          <Route exact path="app/:id" element={<ProductPage />} />
          <Route exact path="/order" element={<OrderPage />} />
          <Route exact path="/rules" element={<RulesPage />} />
          <Route exact path="/lycian" element={<LycianWayPage />} />
          <Route exact path="/rockClimbing" element={<RockClimbingPage />} />
          <Route exact path="/lake" element={<LakeRoutePage />} />
          <Route exact path="/guriaTea" element={<GuriaTeaPage />} />
          <Route exact path="/maga" element={<MagaPage />} />
          <Route exact path="/erge" element={<ErgeRoutePage />} />
          <Route exact path="/garden" element={<GardenRoutePage />} />
          <Route exact path="/kazbeg" element={<KazbegPage />} />
          <Route exact path="/hikhani" element={<HikhaniTripPage />} />
          <Route exact path="/udziro" element={<UdziroPage />} />
          <Route exact path="/udziro" element={<UdziroPage />} />
          <Route
            exact
            path="/goderdzi_mounting"
            element={<GoderdziMountingTripPage />}
          />
          <Route exact path="/yoga-gomismta" element={<YogaGomismtaPage />} />
          <Route exact path="/greenlake" element={<GreenlakePage />} />
          <Route
            exact
            path="/gomismta_chinchao"
            element={<GomismtaChinchaoPage />}
          />
          <Route exact path="/bakhmaro" element={<BakhmaroPage />} />
          <Route
            exact
            path="/jvarimindori"
            element={<JvarimindoriTripPage />}
          />
          <Route exact path="/tbikeli" element={<TbikeliTripPage />} />
          <Route exact path="/martvili" element={<MartviliTripPage />} />
          <Route exact path="/tea" element={<TeaTripPage />} />
          <Route exact path="/uchkho" element={<UchkhoTripPage />} />

          <Route exact path="/svaneti" element={<SvanetiTripPage />} />
          <Route exact path="*" element={<Error />} />
          <Route exact path="/return_policy" element={<ReturnPolicyPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
