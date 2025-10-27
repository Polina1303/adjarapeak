export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/service",
    Component: ServiceCenter,
  },
  {
    path: "/sale",
    Component: SalePage,
  },
  {
    path: "/discount",
    Component: DiscountPage,
  },
  {
    path: "/sale_food",
    Component: SeaSalePage,
  },
  {
    path: "/sport_sale",
    Component: SportSalePage,
  },
  {
    path: "/rental",
    Component: RentalPage,
  },
  {
    path: "/rent",
    Component: RentPage,
  },
  {
    path: "/rent_sky",
    Component: RentSkyPage,
  },
  {
    path: "/one_day_trip",
    Component: TripPageOneDay,
  },
  {
    path: "/clothes",
    Component: ClothesPage,
  },
  {
    path: "/two_day_trip",
    Component: TripPageTwoDay,
  },
  {
    path: "/transfer",
    Component: Transfer,
  },
  {
    path: "/trip",
    Component: TripPage,
  },
  {
    path: "/app/:id",
    Component: ProductPage,
  },
  {
    path: "/order",
    Component: OrderPage,
  },
  {
    path: "/rules",
    Component: RulesPage,
  },
  {
    path: "/lycian",
    Component: LycianWayPage,
  },
  {
    path: "/rockClimbing",
    Component: RockClimbingPage,
  },
  {
    path: "/lake",
    Component: LakeRoutePage,
  },
  {
    path: "/guriaTea",
    Component: GuriaTeaPage,
  },
  {
    path: "/maga",
    Component: MagaPage,
  },
  {
    path: "/erge",
    Component: ErgeRoutePage,
  },
  {
    path: "/garden",
    Component: GardenRoutePage,
  },
  {
    path: "/kazbeg",
    Component: KazbegPage,
  },
  {
    path: "/hikhani",
    Component: HikhaniTripPage,
  },
  {
    path: "/udziro",
    Component: UdziroPage,
  },
  {
    path: "/goderdzi_mounting",
    Component: GoderdziMountingTripPage,
  },
  {
    path: "/yoga-gomismta",
    Component: YogaGomismtaPage,
  },
  {
    path: "/greenlake",
    Component: GreenlakePage,
  },
  {
    path: "/gomismta_chinchao",
    Component: GomismtaChinchaoPage,
  },
  {
    path: "/bakhmaro",
    Component: BakhmaroPage,
  },
  {
    path: "/jvarimindori",
    Component: JvarimindoriTripPage,
  },
  {
    path: "/tbikeli",
    Component: TbikeliTripPage,
  },
  {
    path: "/martvili",
    Component: MartviliTripPage,
  },
  {
    path: "/tea",
    Component: TeaTripPage,
  },
  {
    path: "/uchkho",
    Component: UchkhoTripPage,
  },
  {
    path: "/svaneti",
    Component: SvanetiTripPage,
  },
  {
    path: "/return_policy",
    Component: ReturnPolicyPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
  {
    path: "*",
    Component: Error,
  },
]);
