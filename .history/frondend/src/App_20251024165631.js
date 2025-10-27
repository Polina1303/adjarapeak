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
import { RentalPage } from "./pages/rental-page";

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
import { ServiceCenter } from "./pages/service-center-page";
import { ContactPage } from "./pages/contact-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]);

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<ServiceCenter />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/discount" element={<DiscountPage />} />
          <Route path="/sale_food" element={<SaleFoodPage />} />
          <Route path="/sale_sea" element={<SeaSalePage />} />
          <Route path="/sport_sale" element={<SportSalePage />} />
          <Route path="/rental" element={<RentalPage />} />
          <Route path="/rent" element={<RentPage />} />
          <Route path="/rent_sky" element={<RentSkyPage />} />
          <Route path="/one_day_trip" element={<TripPageOneDay />} />
          <Route path="/clothes" element={<ClothesPage />} />
          <Route path="/two_day_trip" element={<TripPageTwoDay />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/trip" element={<TripPage />} />
          <Route path="app/:id" element={<ProductPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/lycian" element={<LycianWayPage />} />
          <Route path="/rockClimbing" element={<RockClimbingPage />} />
          <Route path="/lake" element={<LakeRoutePage />} />
          <Route path="/guriaTea" element={<GuriaTeaPage />} />
          <Route path="/maga" element={<MagaPage />} />
          <Route path="/erge" element={<ErgeRoutePage />} />
          <Route path="/garden" element={<GardenRoutePage />} />
          <Route path="/kazbeg" element={<KazbegPage />} />
          <Route path="/hikhani" element={<HikhaniTripPage />} />
          <Route path="/udziro" element={<UdziroPage />} />
          <Route path="/udziro" element={<UdziroPage />} />
          <Route
            path="/goderdzi_mounting"
            element={<GoderdziMountingTripPage />}
          />
          <Route path="/yoga-gomismta" element={<YogaGomismtaPage />} />
          <Route path="/greenlake" element={<GreenlakePage />} />
          <Route path="/gomismta_chinchao" element={<GomismtaChinchaoPage />} />
          <Route path="/bakhmaro" element={<BakhmaroPage />} />
          <Route path="/jvarimindori" element={<JvarimindoriTripPage />} />
          <Route path="/tbikeli" element={<TbikeliTripPage />} />
          <Route path="/martvili" element={<MartviliTripPage />} />
          <Route path="/tea" element={<TeaTripPage />} />
          <Route path="/uchkho" element={<UchkhoTripPage />} />

          <Route path="/svaneti" element={<SvanetiTripPage />} />
          <Route path="*" element={<Error />} />
          <Route path="/return_policy" element={<ReturnPolicyPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
