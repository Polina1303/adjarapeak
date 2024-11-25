import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { SalePage } from "./pages/sale-page";
import { RentPage } from "./pages/rent-page";
import { Header } from "./components/header";
import { ProductPage } from "./pages/product-page";
import { SleepingbagPage } from "./pages/sleepingbag-page";
import { BackpackPage } from "./pages/backpack-page";
import { LanternPage } from "./pages/lantern-page";
import { GasPage } from "./pages/gas-page";
import { LakeRoutePage } from "./pages/lake-route-page";
import { GardenRoutePage } from "./pages/garden-route-page";
import { ErgeRoutePage } from "./pages/erge-route-page";
import { MatPage } from "./pages/mat-page";
import { DishesPage } from "./pages/dishes-page";
import { ThermosPage } from "./pages/thermos-page";
import { TrekkingsticksPage } from "./pages/trekkingsticks-page";
import { OrderPage } from "./pages/order-page";
import { KnifePage } from "./pages/knife-page";
import { ChairPage } from "./pages/chair-page";
import { AirProductPage } from "./pages/airproduct-page";
import { Error } from "./pages/error-page/error-page";
import { TentPage } from "./pages/tent-page";
import { SunglassesPage } from "./pages/sunglasses-page";
import { BuffPage } from "./pages/buff-page";
import { AccessoriesPage } from "./pages/accessories-page";
import { RaincoatPage } from "./pages/raincoat-page";
import { Footer } from "./components/footer";
import { SublimatesPage } from "./pages/sublimates-page/sublimates-page";
import { RulesPage } from "./pages/rules-page";
import { HermeticBagsPage } from "./pages/hermetic-bags/hermetic-bags";
import { TermoryukzakPage } from "./pages/termoryukzak";
import { SupboardPage } from "./pages/supboard-page/supboard-pade";
import { ShoesPage } from "./pages/shoes-page/shoes-page";
import { CoffeePage } from "./pages/coffee-page";
import { SocksPage } from "./pages/socks-page";
import { LycianWayPage } from './pages/lycianWay-page'
import { RockClimbingPage } from "./pages/rock-climbing-page";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/sale" element={<SalePage />} />
        <Route exact path="/rent" element={<RentPage />} />
        <Route exact path="/tent" element={<TentPage />} />
        <Route exact path="/sleepingbag" element={<SleepingbagPage />} />
        <Route exact path="/backpack" element={<BackpackPage />} />
        <Route exact path="/lantern" element={<LanternPage />} />
        <Route exact path="/gas" element={<GasPage />} />
        <Route exact path="/mat" element={<MatPage />} />
        <Route exact path="/bottle" element={<ThermosPage />} />
        <Route exact path="/dishes" element={<DishesPage />} />
        <Route exact path="/buff" element={<BuffPage />} />
        <Route exact path="/raincoat" element={<RaincoatPage />} />
        <Route exact path="/knife" element={<KnifePage />} />
        <Route exact path="/chair" element={<ChairPage />} />
        <Route exact path="/sunglasses" element={<SunglassesPage />} />
        <Route exact path="/air" element={<AirProductPage />} />
        <Route exact path="/accessories" element={<AccessoriesPage />} />
        <Route exact path="/trekkingsticks" element={<TrekkingsticksPage />} />
        <Route exact path="app/:id" element={<ProductPage />} />
        <Route exact path="/order" element={<OrderPage />} />
        <Route exact path="/rules" element={<RulesPage />} />
        <Route exact path="/lycian" element={<LycianWayPage />} />
        <Route exact path="/rockClimbing" element={<RockClimbingPage />} />
        <Route exact path="/lake" element={<LakeRoutePage />} />
        <Route exact path="/erge" element={<ErgeRoutePage />} />
        <Route exact path="/garden" element={<GardenRoutePage />} />
        <Route exact path="/hermo" element={<HermeticBagsPage />} />
        <Route exact path="/termoryukzak" element={<TermoryukzakPage />} />
        <Route exact path="/sublimates" element={<SublimatesPage />} />
        <Route exact path="/coffee" element={<CoffeePage />} />
        <Route exact path="/shoes" element={<ShoesPage />} />
        <Route exact path="/supboard" element={<SupboardPage />} />
        <Route exact path="/socks" element={<SocksPage />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
