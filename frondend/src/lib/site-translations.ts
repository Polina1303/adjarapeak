import type { Lang } from "@/lib/i18n";

export const SITE_TEXT = {
  RU: {
    common: {
      addToCart: "Добавить в корзину",
      addToCartShort: "В корзину",
      inCart: "В корзине",
      openCart: "Открыть корзину",
      outOfStock: "Нет в наличии",
      occupied: "Занято",
      perDay: "/сутки",
      perTraining: "за тренировку",
      item: "/шт.",
      addedToCart: (title: string) => `Добавлено в корзину: ${title}`,
    },
    home: {
      hero: {
        slides: [
          {
            title: "Adjara\nPeak",
            subtitle:
              "Как создать снаряжение, которое служит годами? Делать его с мыслью о горах. Премиальная экипировка для Кавказа.",
            cta: "Купить снаряжение",
          },
          {
            title: "Скалы\nКвариати",
            subtitle:
              "Тренировки на естественном рельефе с инструкторами Сашей и Егором. Снаряжение и страховка — на нас.",
            cta: "Записаться",
          },
          {
            title: "Кемпинг\nв горах",
            subtitle:
              "Палатки, спальники и горелки — всё для автономного выезда в Аджарские горы.",
            cta: "Арендовать снаряжение",
          },
          {
            title: "Прокат\nснаряжения",
            subtitle:
              "Палатки, лыжи, велосипеды и не только — берите снаряжение в аренду на день или на неделю.",
            cta: "Смотреть прокат",
          },
          {
            title: "Расписание\nпоходов",
            subtitle:
              "Маршруты по Кавказу с гидами Adjara Peak. Выберите дату и присоединяйтесь к группе.",
            cta: "Смотреть походы",
          },
        ],
        goToSlide: (n: number) => `Перейти к слайду ${n}`,
      },
      featuredProducts: "Рекомендуемые товары",
      popularCategories: "Популярные категории",
      rentalEquipment: "Прокат снаряжения",
      newArrivals: "Новинки",
      climbingPromo: {
        title: "Скалолазание в Гонио-Квариати",
        subtitle:
          "Тренировки на естественном рельефе для новичков и опытных. Снаряжение, инструктаж и страховка — на нас. С вами работают Саша и Егор.",
        location: "Гонио-Квариати",
        schedule: "Сб–Вс · 10:00 / 15:00",
        priceNote: "за тренировку",
        book: "Записаться на тренировку",
        learnMore: "Узнать больше",
        imageAlt: "Скалолазание в Гонио-Квариати",
      },
      giftCard: {
        title: "Подарите\nприключение",
        lines: [
          "Идеальный подарок для каждого исследователя.",
          "Действует 6 месяцев с момента покупки.",
          "Можно использовать для снаряжения, одежды и проката.",
          "Доступна на любую сумму — выберите формат под путешествие.",
        ],
        chooseAmount: "Выберите номинал",
        customAmount: "Своя сумма",
        enterAmount: "Введите сумму (₾)",
        amountPlaceholder: (min: number, max: number) => `от ${min} до ${max}`,
        addToCart: "В корзину",
        addToCartAmount: (amount: number) => `В корзину — ₾${amount}`,
        invalidAmount: (min: number, max: number) => `Введите сумму от ₾${min} до ₾${max}`,
        cartTitle: (amount: number) => `Подарочная карта на ₾${amount}`,
        added: (amount: number) => `Подарочная карта на ₾${amount} добавлена в корзину`,
        imageAlt: "Подарочная карта Adjara Peak",
      },
    },
    footer: {
      description:
        "Ваш outdoor-магазин в Аджарии, Грузия. Снаряжение, туры и прокат для горных приключений.",
      navigation: "Навигация",
      contacts: "Контакты",
      language: "Язык",
      rights: "© 2022-2026 Adjara Peak. Все права защищены.",
      address: "Батуми, ул. Генерала Аслана Абашидзе, 19",
      nav: {
        shop: "Магазин",
        rental: "Прокат",
        hikes: "Походы",
        climbing: "Скалолазание",
        service: "Сервисный центр",
        contacts: "Контакты",
      },
    },
    contact: {
      title: "Контакты",
      addressTitle: "Наш адрес",
      address: "Батуми, ул. Генерала Аслана Абашидзе, 19",
      hoursTitle: "Время работы",
      hours: "Ежедневно с 11:00 до 20:00",
      phonesTitle: "Телефоны",
      reviewsTitle: "Отзывы",
      googleReview: "Оставь отзыв в Google",
      yandexReview: "Оставь отзыв в Яндекс",
      mapTitle: "Магазин Adjara Peak — Батуми, улица Генерала Аслана Абашидзе, 19",
      mapLang: "ru",
    },
    hikes: {
      metaTitle: "Походы — Adjara Peak",
      metaDescription:
        "Авторские походы и горные туры в Аджарии и на Кавказе с гидами Adjara Peak.",
      detailTitle: (title: string) => `${title} — Походы Adjara Peak`,
      detailDescriptionFallback: "Поход с гидами Adjara Peak.",
      detailTitleFallback: "Поход — Adjara Peak",
      notFoundTitle: "Поход не найден",
      indexTitle: "Походы по Грузии",
      indexLead:
        "Однодневные выезды и многодневные походы с опытными гидами. Полный комплект снаряжения по запросу.",
      empty:
        "Походы скоро появятся. Свяжитесь с нами, чтобы обсудить индивидуальный маршрут.",
      allHikes: "Все походы",
      book: "Записаться",
      routeTitle: "О маршруте",
      descriptionComing: "Подробное описание появится скоро.",
      reasonsTitle: "Почему мне стоит пойти в этот поход",
      faqTitle: "Частые вопросы",
      galleryTitle: "Фотогалерея",
      priceTitle: "Стоимость:",
      includedTitle: "В стоимость входит:",
      packingTitle: "Список вещей:",
      distanceUnit: "км",
      dateLocale: "ru-RU",
      faq: [
        {
          question: "Что делать, если нет своего снаряжения?",
          answer:
            "Не проблема — у нас работает прокат. Снаряжение оплачивается отдельно: можно выбрать всё нужное в нашем каталоге аренды или просто написать нам, и мы сами подберём подходящий комплект под маршрут и ваш размер.",
        },
        {
          question: "Сколько человек в группе?",
          answer:
            "В среднем собирается группа до 15 человек — достаточно компании, чтобы было весело, и при этом комфортно идти по тропе.",
        },
        {
          question: "Во сколько выезд и возвращение?",
          answer:
            "Стартуем рано утром, обычно между 8:00 и 9:00. Обратно в город возвращаемся вечером — ориентировочно с 21:00 до 23:00, в зависимости от темпа группы и дорожной обстановки.",
        },
      ],
      demoFeatures: [
        "Трансфер на комфортабельном микроавтобусе",
        "Сопровождение инструктора",
        "Питание (ланч пакет для перекуса на маршруте и горячий ужин в конце похода)",
        "Групповая аптечка",
        "Групповое снаряжение (газ, газовая горелка, котелок, рации и др.)",
      ],
      demoPackingList: [
        {
          title: "Снаряжение",
          items: [
            "Рюкзак объемом 10-20 литров",
            "Треккинговые палки",
            "Солнцезащитные очки",
            "Сидушка туристическая",
            "Налобный фонарь",
          ],
        },
        {
          title: "Одежда и обувь",
          items: [
            "Треккинговые ботинки и запасная обувь",
            "Термобельё",
            "Штаны ходовые, ветровка",
            "Тёплая кофта из флиса",
            "Кепка, лёгкие перчатки",
            "Купальный костюм и полотенце (если планируете купаться в водопаде)",
          ],
        },
        {
          title: "Личные вещи",
          items: [
            "Индивидуальная аптечка",
            "Кружка, ложка, миска",
            "Гигиеническая помада",
            "Телефон",
            "Фотоаппарат",
            "Термос",
            "Вода (не менее 1,5 л)",
          ],
        },
      ],
    },
    service: {
      heroTitle: "Готовим лыжи и сноуборды к лучшему сезону",
      heroText:
        "Заточка кантов, парафин, ремонт скользящей поверхности и установка креплений — в нашей мастерской в Батуми. Возвращаем доскам и лыжам заводское ощущение.",
      summerHeroTitle: "Ремонт велосипедов для города и гор",
      summerHeroText:
        "Чистка и регулировка трансмиссии, прокачка тормозов, замена камер и покрышек, установка аксессуаров — обслуживаем шоссейные, горные и городские велосипеды в Батуми.",
      priceList: "Прайс-лист",
      book: "Записаться",
      sectionTitle: "Сервисное обслуживание",
      sectionText:
        "Цены актуальны для лыж и сноубордов. Нестандартные работы — по согласованию с мастером.",
      winterSeason: "Зимний сезон",
      summerSeason: "Летний сезон",
      winterSectionText:
        "Цены актуальны для лыж и сноубордов. Нестандартные работы — по согласованию с мастером.",
      summerSectionText:
        "Цены актуальны для велосипедов. Нестандартные работы — по согласованию с мастером.",
      serviceColumn: "Услуга",
      priceColumn: "Цена",
      galleryTitle: "До и после в одном кадре",
      galleryAlt: (n: number) => `Сервис лыж и сноубордов ${n}`,
      ctaTitle: "Привезите снаряжение — заберёте как новое",
      ctaText:
        "Принимаем лыжи и сноуборды каждый день. Стандартная комплексная подготовка — за один рабочий день.",
      addressLabel: "Адрес",
      address: "Батуми, ул. Чавчавадзе 81",
      hoursLabel: "Часы работы",
      hours: "Пн–Сб 10:00 — 20:00 · Вс 11:00 — 18:00",
      phoneLabel: "Телефон",
      services: [
        {
          title: "Комплексное обслуживание",
          desc: "Заточка кантов, чистка скользящей поверхности, снятие старого парафина и нанесение нового (парафины от +3 до −20, шаг 6°).",
          price: "≈ 80 ₾",
          highlight: true,
        },
        {
          title: "Заточка кантов",
          desc: "Восстановление угла кромки для уверенного контроля на льду и жёстком склоне.",
          price: "≈ 40 ₾",
        },
        {
          title: "Консервация",
          desc: "Подготовка снаряжения к межсезонному хранению: чистка, толстый слой защитного парафина.",
          price: "от 20 ₾",
        },
        {
          title: "Ремонт скользящей поверхности",
          desc: "Заливка царапин Ptex, выравнивание базы, восстановление структуры.",
          price: "от 20 ₾",
        },
        {
          title: "Нанесение температурного парафина",
          desc: "Подбор парафина под температуру и тип снега, горячая прокатка утюгом.",
          price: "40 ₾",
        },
        {
          title: "Установка и настройка креплений",
          desc: "Монтаж креплений, регулировка по росту, весу и уровню катания.",
          price: "от 30 ₾",
        },
      ],
      summerServices: [
        {
          title: "Чистка трансмиссии",
          desc: "Полная чистка трансмиссии с последующей смазкой цепи и узлов. Смазка оплачивается отдельно.",
          price: "50 ₾",
          highlight: true,
        },
        { title: "Установка аксессуаров", desc: "Монтаж крыльев, флягодержателей, велокомпьютеров и других аксессуаров.", price: "10 ₾" },
        { title: "Замена кассеты", desc: "Снятие изношенной кассеты и установка новой.", price: "15 ₾" },
        { title: "Замена цепи", desc: "Демонтаж старой цепи и установка новой с подгонкой длины.", price: "15 ₾" },
        { title: "Прокачка тормозов", desc: "Прокачка гидравлической линии одного контура, удаление воздуха.", price: "35 ₾" },
        { title: "Замена тормозных колодок", desc: "Установка новых колодок с проверкой ротора и суппорта.", price: "15 ₾" },
        { title: "Настройка дисковых тормозов", desc: "Центровка суппорта, устранение трения и настройка хода ручки.", price: "30 ₾" },
        { title: "Замена камеры", desc: "Снятие покрышки, замена камеры и накачка до рабочего давления.", price: "20 ₾" },
        { title: "Замена покрышки", desc: "Демонтаж старой покрышки и установка новой с центровкой.", price: "20 ₾" },
        { title: "Устранение прокола", desc: "Поиск прокола, заклейка камеры и обратная сборка колеса.", price: "15 ₾" },
        { title: "Смазка и обслуживание эксцентрика", desc: "Разборка, чистка и смазка эксцентрикового зажима втулки.", price: "10 ₾" },
      ],
      features: [
        {
          title: "Профессиональный станок",
          desc: "Точная геометрия кромки и ровная база после каждой прокатки.",
        },
        {
          title: "Парафины под склон",
          desc: "Подбираем состав под температуру и снег от +3 до −20.",
        },
        {
          title: "Ремонт Ptex",
          desc: "Заливаем царапины и сколы скользящей поверхности.",
        },
        {
          title: "Гарантия на работы",
          desc: "Если что-то пойдёт не так — переделаем без вопросов.",
        },
      ],
      summerFeatures: [
        {
          title: "Ремонт велосипедов",
          desc: "Полный цикл: от прокола камеры до перебора трансмиссии.",
        },
        {
          title: "Настройка трансмиссии",
          desc: "Чёткое переключение, замена цепи, кассеты и тросов.",
        },
        {
          title: "Тормоза и колёса",
          desc: "Прокачка гидравлики, замена колодок, настройка дисковых тормозов.",
        },
        {
          title: "Гарантия на работы",
          desc: "Если что-то пойдёт не так — переделаем без вопросов.",
        },
      ],
    },
    climbing: {
      heroTitle: "Скалолазание в Гонио-Квариати",
      heroText:
        "Тренировки на естественном рельефе для новичков и опытных. Полный комплект снаряжения, верхняя страховка и опытные инструкторы — Саша и Егор.",
      book: "Записаться",
      directions: "Как добраться",
      locationTitle: "Локация: район Гонио-Квариати",
      locationText: "Добраться можно на своём авто, такси, маршрутном такси или 16 автобусе.",
      reviewLink: "Оставить отзыв о тренировке",
      safetyTitle: "Снаряжение и безопасность",
      gearPoint: "Пункт 1 · Снаряжение",
      gearIntro:
        "Мы используем только качественное снаряжение от всемирно известных и надёжных брендов, регулярно проверяем и обновляем его, и полностью обеспечиваем им каждого участника.",
      accessibilityPoint: "Пункт 2 · Доступность",
      accessibilityText:
        "Перед каждой тренировкой проводим инструктаж — для новичков подробно объясняем, чего делать не стоит. Лазаем с верхней страховкой: где не хватает навыков, инструктор поможет подтянуть на сложном участке. На рельефе Гонио-Квариати трассы 5 и 6 категории — доступны многим начинающим, особенно тем, кто уже бывал на скалодроме.",
      experiencePoint: "Пункт 3 · Опыт",
      experienceText:
        "Саша имеет большой опыт работы на этом рельефе и заботится о вас на протяжении всей тренировки.",
      scheduleTitle: "График и расписание",
      trainingPrice: "Стоимость тренировки:",
      back: "Назад",
      forward: "Вперёд",
      photoAlt: (n: number) => `Скалолазание ${n}`,
      gear: [
        { title: "Верёвка динамическая", desc: "Удержание на разрыв 22 кН (2200 кг)." },
        { title: "Каска", desc: "Выдерживает прямой вертикальный удар силой 50 Дж." },
        { title: "Страховочная система", desc: "Фиксируется на человеке сразу в трёх местах, до 150 кг." },
        { title: "Страховочная станция", desc: "2 точки фиксации, усилена двумя разнонаправленными карабинами." },
        { title: "Магнезия", desc: "Поглощает влагу и усиливает сцепление со скалой." },
        { title: "Скальные туфли", desc: "Для лучшего удержания на скале." },
      ],
      team: [
        { name: "Саша", role: "Инструктор" },
        // { name: "Егор", role: "Инструктор" },
      ],
      schedule: [
        { day: "Воскресенье", price: "50 ₾", slots: ["1 группа — 14:00 - 17:00", "2 группа — 17:30 - 20:30"] },
      ],
    },
    mobileNav: {
      aria: "Нижняя навигация",
      home: "Главная",
      shop: "Магазин",
      rental: "Прокат",
      hikes: "Походы",
      cart: "Корзина",
    },
  },
  EN: {
    common: {
      addToCart: "Add to cart",
      addToCartShort: "Add",
      inCart: "In cart",
      openCart: "Open cart",
      outOfStock: "Out of stock",
      occupied: "Booked",
      perDay: "/day",
      perTraining: "per session",
      item: "/item",
      addedToCart: (title: string) => `Added to cart: ${title}`,
    },
    home: {
      hero: {
        slides: [
          {
            title: "Adjara\nPeak",
            subtitle:
              "How do you make gear that lasts for years? Build it with the mountains in mind. Premium equipment for the Caucasus.",
            cta: "Shop gear",
          },
          {
            title: "Kvariati\nRocks",
            subtitle:
              "Outdoor climbing sessions with instructors Sasha and Egor. Gear and belay are on us.",
            cta: "Book a session",
          },
          {
            title: "Mountain\nCamping",
            subtitle:
              "Tents, sleeping bags and stoves — everything for a self-supported trip into the Adjara mountains.",
            cta: "Rent gear",
          },
          {
            title: "Gear\nRental",
            subtitle:
              "Tents, skis, bicycles and more — rent equipment for a day or for a week.",
            cta: "View rental",
          },
          {
            title: "Hiking\nSchedule",
            subtitle:
              "Guided Caucasus routes by Adjara Peak. Pick a date and join the group.",
            cta: "View trips",
          },
        ],
        goToSlide: (n: number) => `Go to slide ${n}`,
      },
      featuredProducts: "Recommended Products",
      popularCategories: "Popular Categories",
      rentalEquipment: "Gear Rental",
      newArrivals: "New Arrivals",
      climbingPromo: {
        title: "Climbing in Gonio-Kvariati",
        subtitle:
          "Outdoor climbing sessions for beginners and experienced climbers. Gear, briefing and belay are on us. Sasha and Egor guide the session.",
        location: "Gonio-Kvariati",
        schedule: "Sat-Sun · 10:00 / 15:00",
        priceNote: "per session",
        book: "Book a climbing session",
        learnMore: "Learn more",
        imageAlt: "Climbing in Gonio-Kvariati",
      },
      giftCard: {
        title: "Give an\nadventure",
        lines: [
          "A perfect gift for every explorer.",
          "Valid for 6 months from purchase.",
          "Can be used for gear, clothing and rental.",
          "Available for any amount — choose the format for the trip.",
        ],
        chooseAmount: "Choose amount",
        customAmount: "Custom amount",
        enterAmount: "Enter amount (₾)",
        amountPlaceholder: (min: number, max: number) => `${min} to ${max}`,
        addToCart: "Add to cart",
        addToCartAmount: (amount: number) => `Add to cart — ₾${amount}`,
        invalidAmount: (min: number, max: number) => `Enter an amount from ₾${min} to ₾${max}`,
        cartTitle: (amount: number) => `Gift card for ₾${amount}`,
        added: (amount: number) => `Gift card for ₾${amount} added to cart`,
        imageAlt: "Adjara Peak gift card",
      },
    },
    footer: {
      description:
        "Your outdoor store in Adjara, Georgia. Gear, tours and rentals for mountain adventures.",
      navigation: "Navigation",
      contacts: "Contacts",
      language: "Language",
      rights: "© 2022-2026 Adjara Peak. All rights reserved.",
      address: "19 General Aslan Abashidze St, Batumi",
      nav: {
        shop: "Shop",
        rental: "Rental",
        hikes: "Hikes",
        climbing: "Rock Climbing",
        service: "Service Center",
        contacts: "Contacts",
      },
    },
    contact: {
      title: "Contacts",
      addressTitle: "Our address",
      address: "19 General Aslan Abashidze St, Batumi",
      hoursTitle: "Opening hours",
      hours: "Daily from 11:00 to 20:00",
      phonesTitle: "Phones",
      reviewsTitle: "Reviews",
      googleReview: "Leave a Google review",
      yandexReview: "Leave a Yandex review",
      mapTitle: "Adjara Peak store — 19 General Aslan Abashidze St, Batumi",
      mapLang: "en",
    },
    hikes: {
      metaTitle: "Hikes — Adjara Peak",
      metaDescription:
        "Signature hikes and mountain tours in Adjara and across the Caucasus with Adjara Peak guides.",
      detailTitle: (title: string) => `${title} — Adjara Peak Hikes`,
      detailDescriptionFallback: "A guided hike with Adjara Peak.",
      detailTitleFallback: "Hike — Adjara Peak",
      notFoundTitle: "Hike not found",
      indexTitle: "Hiking in Georgia",
      indexLead:
        "One-day trips and multi-day hikes with experienced guides. Full gear set available on request.",
      empty:
        "Hikes will appear soon. Contact us to discuss a custom route.",
      allHikes: "All hikes",
      book: "Book",
      routeTitle: "About the route",
      descriptionComing: "A detailed description will appear soon.",
      reasonsTitle: "Why this hike is worth joining",
      faqTitle: "FAQ",
      galleryTitle: "Photo gallery",
      priceTitle: "Price:",
      includedTitle: "Included in the price:",
      packingTitle: "Packing list:",
      distanceUnit: "km",
      dateLocale: "en-US",
      faq: [
        {
          question: "What if I do not have my own gear?",
          answer:
            "No problem — we have rental gear. Equipment is paid separately: choose everything you need in our rental catalog, or simply message us and we will put together the right set for the route and your size.",
        },
        {
          question: "How many people are in the group?",
          answer:
            "Groups usually have up to 15 people — enough company to make it fun, while still keeping the pace comfortable on the trail.",
        },
        {
          question: "What time do we leave and return?",
          answer:
            "We start early in the morning, usually between 8:00 and 9:00. We return to the city in the evening, approximately between 21:00 and 23:00, depending on the group's pace and road conditions.",
        },
      ],
      demoFeatures: [
        "Transfer by comfortable minibus",
        "Instructor support",
        "Meals (lunch pack for the route and a hot dinner after the hike)",
        "Group first-aid kit",
        "Group gear (gas, stove, pot, radios and more)",
      ],
      demoPackingList: [
        {
          title: "Gear",
          items: [
            "10-20 liter backpack",
            "Trekking poles",
            "Sunglasses",
            "Sit pad",
            "Headlamp",
          ],
        },
        {
          title: "Clothing and footwear",
          items: [
            "Trekking boots and spare shoes",
            "Base layers",
            "Hiking pants and windbreaker",
            "Warm fleece layer",
            "Cap and light gloves",
            "Swimsuit and towel if you plan to swim in the waterfall",
          ],
        },
        {
          title: "Personal items",
          items: [
            "Personal first-aid kit",
            "Cup, spoon and bowl",
            "Lip balm",
            "Phone",
            "Camera",
            "Thermos",
            "Water, at least 1.5 l",
          ],
        },
      ],
    },
    service: {
      heroTitle: "We tune skis and snowboards for your best season",
      heroText:
        "Edge sharpening, waxing, base repair and binding setup in our Batumi workshop. We bring boards and skis back to a factory-fresh feel.",
      summerHeroTitle: "Bike repairs for city rides and mountain trails",
      summerHeroText:
        "Drivetrain cleaning and tuning, brake bleeding, tube and tire replacement, accessory installation — we service road, mountain and city bikes in Batumi.",
      priceList: "Price list",
      book: "Book service",
      sectionTitle: "Service Center",
      sectionText:
        "Prices apply to skis and snowboards. Custom jobs are agreed with the technician.",
      winterSeason: "Winter season",
      summerSeason: "Summer season",
      winterSectionText:
        "Prices apply to skis and snowboards. Custom jobs are agreed with the technician.",
      summerSectionText:
        "Prices apply to bicycles. Custom jobs are agreed with the technician.",
      serviceColumn: "Service",
      priceColumn: "Price",
      galleryTitle: "Before and after in one frame",
      galleryAlt: (n: number) => `Ski and snowboard service ${n}`,
      ctaTitle: "Bring your gear in — pick it up like new",
      ctaText:
        "We accept skis and snowboards every day. Standard full preparation takes one business day.",
      addressLabel: "Address",
      address: "81 Chavchavadze St, Batumi",
      hoursLabel: "Opening hours",
      hours: "Mon-Sat 10:00 — 20:00 · Sun 11:00 — 18:00",
      phoneLabel: "Phone",
      services: [
        {
          title: "Full service",
          desc: "Edge sharpening, base cleaning, old wax removal and fresh wax application (waxes from +3 to −20, 6° steps).",
          price: "≈ 80 ₾",
          highlight: true,
        },
        {
          title: "Edge sharpening",
          desc: "Restores edge angle for confident control on ice and hardpack.",
          price: "≈ 40 ₾",
        },
        {
          title: "Storage wax",
          desc: "Off-season preparation: cleaning and a thick protective wax layer.",
          price: "from 20 ₾",
        },
        {
          title: "Base repair",
          desc: "Ptex scratch filling, base leveling and structure restoration.",
          price: "from 20 ₾",
        },
        {
          title: "Temperature wax",
          desc: "Wax selected for snow and temperature, hot-applied with an iron.",
          price: "40 ₾",
        },
        {
          title: "Binding setup",
          desc: "Binding installation and adjustment for height, weight and riding level.",
          price: "from 30 ₾",
        },
      ],
      summerServices: [
        {
          title: "Drivetrain cleaning",
          desc: "Full drivetrain cleaning followed by chain and component lubrication. Lubricant is charged separately.",
          price: "50 ₾",
          highlight: true,
        },
        { title: "Accessory installation", desc: "Mounting fenders, bottle cages, bike computers and other accessories.", price: "10 ₾" },
        { title: "Cassette replacement", desc: "Removing a worn cassette and installing a new one.", price: "15 ₾" },
        { title: "Chain replacement", desc: "Removing the old chain and fitting a new one to length.", price: "15 ₾" },
        { title: "Brake bleeding", desc: "Bleeding one hydraulic brake circuit and removing air from the line.", price: "35 ₾" },
        { title: "Brake pad replacement", desc: "Installing new pads with rotor and caliper check.", price: "15 ₾" },
        { title: "Disc brake adjustment", desc: "Caliper centering, rub removal and lever feel adjustment.", price: "30 ₾" },
        { title: "Tube replacement", desc: "Removing the tire, replacing the inner tube and inflating to working pressure.", price: "20 ₾" },
        { title: "Tire replacement", desc: "Removing the old tire and installing a new one with centering.", price: "20 ₾" },
        { title: "Puncture repair", desc: "Finding the puncture, patching the tube and reassembling the wheel.", price: "15 ₾" },
        { title: "Quick-release service", desc: "Disassembly, cleaning and lubrication of the hub quick-release clamp.", price: "10 ₾" },
      ],
      features: [
        {
          title: "Professional machine",
          desc: "Precise edge geometry and an even base after every pass.",
        },
        {
          title: "Slope-specific waxes",
          desc: "We choose wax for temperature and snow from +3 to −20.",
        },
        {
          title: "Ptex repair",
          desc: "We fill scratches and chips in the sliding surface.",
        },
        {
          title: "Work guarantee",
          desc: "If something is not right, we redo it without questions.",
        },
      ],
      summerFeatures: [
        {
          title: "Bike repairs",
          desc: "Full service cycle: from tube punctures to drivetrain overhaul.",
        },
        {
          title: "Drivetrain tuning",
          desc: "Crisp shifting, chain, cassette and cable replacement.",
        },
        {
          title: "Brakes and wheels",
          desc: "Hydraulic bleeding, pad replacement and disc brake adjustment.",
        },
        {
          title: "Work guarantee",
          desc: "If something is not right, we redo it without questions.",
        },
      ],
    },
    climbing: {
      heroTitle: "Rock Climbing in Gonio-Kvariati",
      heroText:
        "Outdoor climbing sessions for beginners and experienced climbers. Full gear, top-rope belay and experienced instructors — Sasha and Egor.",
      book: "Book a session",
      directions: "How to get there",
      locationTitle: "Location: Gonio-Kvariati area",
      locationText: "You can get there by car, taxi, minibus or bus 16.",
      reviewLink: "Leave a training review",
      safetyTitle: "Gear and Safety",
      gearPoint: "Point 1 · Gear",
      gearIntro:
        "We use quality equipment from reliable world-known brands, check and refresh it regularly, and fully equip every participant.",
      accessibilityPoint: "Point 2 · Accessibility",
      accessibilityText:
        "Before each session we run a briefing and explain what beginners should avoid. We climb with top-rope belay: when skills are not enough, the instructor can help you through the hard section. Gonio-Kvariati routes of grades 5 and 6 are accessible to many beginners, especially those who have already tried a climbing gym.",
      experiencePoint: "Point 3 · Experience",
      experienceText:
        "Sasha has extensive experience working on this terrain and takes care of you throughout the entire training session.",
      scheduleTitle: "Schedule",
      trainingPrice: "Session price:",
      back: "Back",
      forward: "Forward",
      photoAlt: (n: number) => `Rock climbing ${n}`,
      gear: [
        { title: "Dynamic rope", desc: "Breaking strength 22 kN (2200 kg)." },
        { title: "Helmet", desc: "Withstands a direct vertical impact of 50 J." },
        { title: "Harness", desc: "Secures the climber at three points, up to 150 kg." },
        { title: "Belay station", desc: "2 anchor points, reinforced with two opposed carabiners." },
        { title: "Chalk", desc: "Absorbs moisture and improves grip on the rock." },
        { title: "Climbing shoes", desc: "For better foothold on the rock." },
      ],
      team: [
        { name: "Sasha", role: "Instructor" },
        // { name: "Egor", role: "Instructor" },
      ],
      schedule: [
        { day: "Sunday", price: "50 ₾", slots: ["Group 1 — 14:00 - 17:00", "Group 2 — 17:30- 20:30"] },
      ],
    },
    mobileNav: {
      aria: "Bottom navigation",
      home: "Home",
      shop: "Shop",
      rental: "Rental",
      hikes: "Hikes",
      cart: "Cart",
    },
  },
  GE: {
    common: {
      addToCart: "კალათაში დამატება",
      addToCartShort: "კალათაში",
      inCart: "კალათაშია",
      openCart: "კალათის გახსნა",
      outOfStock: "არ არის მარაგში",
      occupied: "დაკავებულია",
      perDay: "/დღე",
      perTraining: "ვარჯიშზე",
      item: "/ცალი",
      addedToCart: (title: string) => `კალათაში დაემატა: ${title}`,
    },
    home: {
      hero: {
        slides: [
          {
            title: "Adjara\nPeak",
            subtitle:
              "როგორ იქმნება აღჭურვილობა, რომელიც წლები გემსახურება? მთებზე ფიქრით. პრემიუმ ეკიპირება კავკასიისთვის.",
            cta: "აღჭურვილობის ყიდვა",
          },
          {
            title: "კვარიათის\nკლდეები",
            subtitle:
              "ვარჯიშები ბუნებრივ რელიეფზე ინსტრუქტორებთან, საშასთან და ეგორთან. აღჭურვილობა და დაზღვევა ჩვენზეა.",
            cta: "ჩაწერა",
          },
          {
            title: "კემპინგი\nმთებში",
            subtitle:
              "კარვები, საძილე ტომრები და გაზქურები — ყველაფერი აჭარის მთებში დამოუკიდებელი გასვლისთვის.",
            cta: "აღჭურვილობის ქირაობა",
          },
          {
            title: "აღჭურვილობის\nქირაობა",
            subtitle:
              "კარვები, თხილამურები, ველოსიპედები და სხვა — იქირავეთ აღჭურვილობა დღით ან კვირით.",
            cta: "ქირაობის ნახვა",
          },
          {
            title: "ლაშქრობების\nგანრიგი",
            subtitle:
              "Adjara Peak-ის გიდებთან კავკასიის მარშრუტები. აირჩიეთ თარიღი და შეუერთდით ჯგუფს.",
            cta: "ლაშქრობების ნახვა",
          },
        ],
        goToSlide: (n: number) => `${n} სლაიდზე გადასვლა`,
      },
      featuredProducts: "რეკომენდებული პროდუქტები",
      popularCategories: "პოპულარული კატეგორიები",
      rentalEquipment: "აღჭურვილობის ქირაობა",
      newArrivals: "სიახლეები",
      climbingPromo: {
        title: "კლდეზე ცოცვა გონიო-კვარიათში",
        subtitle:
          "ვარჯიშები ბუნებრივ რელიეფზე დამწყებებისთვის და გამოცდილებისთვის. აღჭურვილობა, ინსტრუქტაჟი და დაზღვევა ჩვენზეა. თქვენთან მუშაობენ საშა და ეგორი.",
        location: "გონიო-კვარიათი",
        schedule: "შაბ-კვ · 10:00 / 15:00",
        priceNote: "ვარჯიშზე",
        book: "ვარჯიშზე ჩაწერა",
        learnMore: "მეტის გაგება",
        imageAlt: "კლდეზე ცოცვა გონიო-კვარიათში",
      },
      giftCard: {
        title: "აჩუქეთ\nთავგადასავალი",
        lines: [
          "იდეალური საჩუქარი ყველა მკვლევრისთვის.",
          "მოქმედებს შეძენიდან 6 თვის განმავლობაში.",
          "შეიძლება გამოყენება აღჭურვილობაზე, ტანსაცმელსა და ქირაობაზე.",
          "ხელმისაწვდომია ნებისმიერი თანხით — აირჩიეთ ფორმატი მოგზაურობისთვის.",
        ],
        chooseAmount: "აირჩიეთ ნომინალი",
        customAmount: "სხვა თანხა",
        enterAmount: "შეიყვანეთ თანხა (₾)",
        amountPlaceholder: (min: number, max: number) => `${min}-დან ${max}-მდე`,
        addToCart: "კალათაში",
        addToCartAmount: (amount: number) => `კალათაში — ₾${amount}`,
        invalidAmount: (min: number, max: number) => `შეიყვანეთ თანხა ₾${min}-დან ₾${max}-მდე`,
        cartTitle: (amount: number) => `სასაჩუქრე ბარათი ₾${amount}`,
        added: (amount: number) => `სასაჩუქრე ბარათი ₾${amount} დაემატა კალათაში`,
        imageAlt: "Adjara Peak-ის სასაჩუქრე ბარათი",
      },
    },
    footer: {
      description:
        "თქვენი outdoor მაღაზია აჭარაში, საქართველოში. აღჭურვილობა, ტურები და ქირაობა მთის თავგადასავლებისთვის.",
      navigation: "ნავიგაცია",
      contacts: "კონტაქტები",
      language: "ენა",
      rights: "© 2022-2026 Adjara Peak. ყველა უფლება დაცულია.",
      address: "ბათუმი, გენერალ ასლან აბაშიძის ქ. 19",
      nav: {
        shop: "მაღაზია",
        rental: "ქირაობა",
        hikes: "ლაშქრობები",
        climbing: "კლდეზე ცოცვა",
        service: "სერვის-ცენტრი",
        contacts: "კონტაქტები",
      },
    },
    contact: {
      title: "კონტაქტები",
      addressTitle: "ჩვენი მისამართი",
      address: "ბათუმი, გენერალ ასლან აბაშიძის ქ. 19",
      hoursTitle: "სამუშაო საათები",
      hours: "ყოველდღე 11:00-დან 20:00-მდე",
      phonesTitle: "ტელეფონები",
      reviewsTitle: "შეფასებები",
      googleReview: "დატოვეთ შეფასება Google-ში",
      yandexReview: "დატოვეთ შეფასება Yandex-ში",
      mapTitle: "Adjara Peak-ის მაღაზია — ბათუმი, გენერალ ასლან აბაშიძის ქ. 19",
      mapLang: "ka",
    },
    hikes: {
      metaTitle: "ლაშქრობები — Adjara Peak",
      metaDescription:
        "ავტორული ლაშქრობები და მთის ტურები აჭარასა და კავკასიაში Adjara Peak-ის გიდებთან ერთად.",
      detailTitle: (title: string) => `${title} — Adjara Peak-ის ლაშქრობები`,
      detailDescriptionFallback: "ლაშქრობა Adjara Peak-ის გიდებთან ერთად.",
      detailTitleFallback: "ლაშქრობა — Adjara Peak",
      notFoundTitle: "ლაშქრობა ვერ მოიძებნა",
      indexTitle: "ლაშქრობები საქართველოში",
      indexLead:
        "ერთდღიანი გასვლები და მრავალდღიანი ლაშქრობები გამოცდილ გიდებთან ერთად. სრული აღჭურვილობა ხელმისაწვდომია მოთხოვნით.",
      empty:
        "ლაშქრობები მალე გამოჩნდება. დაგვიკავშირდით ინდივიდუალური მარშრუტის შესათანხმებლად.",
      allHikes: "ყველა ლაშქრობა",
      book: "ჩაწერა",
      routeTitle: "მარშრუტის შესახებ",
      descriptionComing: "დეტალური აღწერა მალე გამოჩნდება.",
      reasonsTitle: "რატომ ღირს ამ ლაშქრობაში წამოსვლა",
      faqTitle: "ხშირი კითხვები",
      galleryTitle: "ფოტოგალერეა",
      priceTitle: "ფასი:",
      includedTitle: "ფასში შედის:",
      packingTitle: "საჭირო ნივთები:",
      distanceUnit: "კმ",
      dateLocale: "ka-GE",
      faq: [
        {
          question: "რა ვქნა, თუ საკუთარი აღჭურვილობა არ მაქვს?",
          answer:
            "პრობლემა არ არის — გვაქვს ქირაობის სერვისი. აღჭურვილობა ცალკე იფარება: შეგიძლიათ აირჩიოთ საჭირო ნივთები ჩვენს ქირაობის კატალოგში, ან მოგვწეროთ და ჩვენ თვითონ შეგირჩევთ მარშრუტსა და ზომაზე მორგებულ კომპლექტს.",
        },
        {
          question: "რამდენი ადამიანია ჯგუფში?",
          answer:
            "ჩვეულებრივ ჯგუფში 15 ადამიანამდეა — საკმარისი კომპანია კარგი განწყობისთვის და ამავე დროს კომფორტული ტემპი ბილიკზე.",
        },
        {
          question: "რომელ საათზე გავდივართ და ვბრუნდებით?",
          answer:
            "გავდივართ დილით ადრე, ჩვეულებრივ 8:00-დან 9:00-მდე. ქალაქში ვბრუნდებით საღამოს, დაახლოებით 21:00-დან 23:00-მდე, ჯგუფის ტემპისა და გზის პირობების მიხედვით.",
        },
      ],
      demoFeatures: [
        "ტრანსფერი კომფორტული მიკროავტობუსით",
        "ინსტრუქტორის თანხლება",
        "კვება (ლანჩ-პაკეტი მარშრუტზე და ცხელი ვახშამი ლაშქრობის ბოლოს)",
        "ჯგუფური აფთიაქი",
        "ჯგუფური აღჭურვილობა (გაზი, გაზქურა, ქვაბი, რაციები და სხვა)",
      ],
      demoPackingList: [
        {
          title: "აღჭურვილობა",
          items: [
            "10-20 ლიტრიანი ზურგჩანთა",
            "ტრეკინგის ჯოხები",
            "მზის სათვალე",
            "ტურისტული დასაჯდომი",
            "თავის ფანარი",
          ],
        },
        {
          title: "ტანსაცმელი და ფეხსაცმელი",
          items: [
            "ტრეკინგის ფეხსაცმელი და სათადარიგო ფეხსაცმელი",
            "თერმული საცვალი",
            "სალაშქრო შარვალი და ქარსაცავი",
            "თბილი ფლისის ზედა",
            "კეპი და მსუბუქი ხელთათმანები",
            "საცურაო კოსტიუმი და პირსახოცი, თუ ჩანჩქერში ბანაობას გეგმავთ",
          ],
        },
        {
          title: "პირადი ნივთები",
          items: [
            "პირადი აფთიაქი",
            "ჭიქა, კოვზი და ჯამი",
            "ჰიგიენური ტუჩსაცხი",
            "ტელეფონი",
            "ფოტოაპარატი",
            "თერმოსი",
            "წყალი, მინიმუმ 1.5 ლ",
          ],
        },
      ],
    },
    service: {
      heroTitle: "ვამზადებთ თხილამურებსა და სნოუბორდებს საუკეთესო სეზონისთვის",
      heroText:
        "კანტების ალესვა, პარაფინი, სასრიალო ზედაპირის შეკეთება და სამაგრების დაყენება ჩვენს სახელოსნოში ბათუმში. დაფებსა და თხილამურებს ქარხნულ შეგრძნებას ვუბრუნებთ.",
      summerHeroTitle: "ველოსიპედის შეკეთება ქალაქისა და მთისთვის",
      summerHeroText:
        "ტრანსმისიის წმენდა და რეგულირება, მუხრუჭების დაჰაერება, კამერებისა და საბურავების შეცვლა, აქსესუარების დაყენება — ბათუმში ვემსახურებით შოსე, მთის და ქალაქის ველოსიპედებს.",
      priceList: "ფასები",
      book: "ჩაწერა",
      sectionTitle: "სერვისული მომსახურება",
      sectionText:
        "ფასები მოქმედებს თხილამურებისა და სნოუბორდებისთვის. არასტანდარტული სამუშაოები შეთანხმებით.",
      winterSeason: "ზამთრის სეზონი",
      summerSeason: "ზაფხულის სეზონი",
      winterSectionText:
        "ფასები მოქმედებს თხილამურებისა და სნოუბორდებისთვის. არასტანდარტული სამუშაოები შეთანხმებით.",
      summerSectionText:
        "ფასები მოქმედებს ველოსიპედებისთვის. არასტანდარტული სამუშაოები შეთანხმებით.",
      serviceColumn: "სერვისი",
      priceColumn: "ფასი",
      galleryTitle: "მანამდე და შემდეგ ერთ კადრში",
      galleryAlt: (n: number) => `თხილამურებისა და სნოუბორდების სერვისი ${n}`,
      ctaTitle: "მოიტანეთ აღჭურვილობა — წაიღებთ როგორც ახალს",
      ctaText:
        "თხილამურებსა და სნოუბორდებს ყოველდღე ვიღებთ. სტანდარტული სრული მომზადება ერთ სამუშაო დღეში სრულდება.",
      addressLabel: "მისამართი",
      address: "ბათუმი, ჭავჭავაძის ქ. 81",
      hoursLabel: "სამუშაო საათები",
      hours: "ორშ-შაბ 10:00 — 20:00 · კვ 11:00 — 18:00",
      phoneLabel: "ტელეფონი",
      services: [
        {
          title: "სრული მომსახურება",
          desc: "კანტების ალესვა, სასრიალო ზედაპირის წმენდა, ძველი პარაფინის მოხსნა და ახლის დატანა (პარაფინები +3-დან −20-მდე, 6° ნაბიჯით).",
          price: "დაახლ. 80 ₾",
          highlight: true,
        },
        {
          title: "კანტების ალესვა",
          desc: "კანტის კუთხის აღდგენა ყინულსა და მყარ ფერდობზე თავდაჯერებული კონტროლისთვის.",
          price: "დაახლ. 40 ₾",
        },
        {
          title: "კონსერვაცია",
          desc: "აღჭურვილობის მომზადება სეზონებს შორის შესანახად: წმენდა და დამცავი პარაფინის სქელი ფენა.",
          price: "20 ₾-დან",
        },
        {
          title: "სასრიალო ზედაპირის შეკეთება",
          desc: "ნაკაწრების Ptex-ით შევსება, ბაზის გასწორება და სტრუქტურის აღდგენა.",
          price: "20 ₾-დან",
        },
        {
          title: "ტემპერატურული პარაფინი",
          desc: "პარაფინის შერჩევა ტემპერატურისა და თოვლის მიხედვით, ცხლად დატანა უთოთი.",
          price: "40 ₾",
        },
        {
          title: "სამაგრების დაყენება და რეგულირება",
          desc: "სამაგრების მონტაჟი და მორგება სიმაღლის, წონისა და დონის მიხედვით.",
          price: "30 ₾-დან",
        },
      ],
      summerServices: [
        {
          title: "ტრანსმისიის წმენდა",
          desc: "ტრანსმისიის სრული წმენდა და შემდეგ ჯაჭვისა და კვანძების შეზეთვა. საპოხი ცალკე ანგარიშდება.",
          price: "50 ₾",
          highlight: true,
        },
        { title: "აქსესუარების დაყენება", desc: "ფრთების, ბოთლის სამაგრების, ველოკომპიუტერებისა და სხვა აქსესუარების მონტაჟი.", price: "10 ₾" },
        { title: "კასეტის შეცვლა", desc: "გაცვეთილი კასეტის მოხსნა და ახლის დაყენება.", price: "15 ₾" },
        { title: "ჯაჭვის შეცვლა", desc: "ძველი ჯაჭვის მოხსნა და ახლის მორგება სიგრძეზე.", price: "15 ₾" },
        { title: "მუხრუჭების დაჰაერება", desc: "ერთი ჰიდრავლიკური მუხრუჭის ხაზის დაჰაერება და ჰაერის მოცილება.", price: "35 ₾" },
        { title: "მუხრუჭის ხუნდების შეცვლა", desc: "ახალი ხუნდების დაყენება როტორისა და კალიპერის შემოწმებით.", price: "15 ₾" },
        { title: "დისკური მუხრუჭების რეგულირება", desc: "კალიპერის ცენტრირება, ხახუნის მოცილება და სახელურის სვლის მორგება.", price: "30 ₾" },
        { title: "კამერის შეცვლა", desc: "საბურავის მოხსნა, კამერის შეცვლა და სამუშაო წნევამდე დაბერვა.", price: "20 ₾" },
        { title: "საბურავის შეცვლა", desc: "ძველი საბურავის მოხსნა და ახლის დაყენება ცენტრირებით.", price: "20 ₾" },
        { title: "პუნქციის შეკეთება", desc: "პუნქციის პოვნა, კამერის დაწებება და ბორბლის აწყობა.", price: "15 ₾" },
        { title: "ექსცენტრიკის მომსახურება", desc: "ბორბლის ექსცენტრიკული დამჭერის დაშლა, წმენდა და შეზეთვა.", price: "10 ₾" },
      ],
      features: [
        {
          title: "პროფესიონალური დანადგარი",
          desc: "კანტის ზუსტი გეომეტრია და თანაბარი ბაზა ყოველი გატარების შემდეგ.",
        },
        {
          title: "პარაფინები ფერდობისთვის",
          desc: "შემადგენლობას ვარჩევთ ტემპერატურისა და თოვლის მიხედვით +3-დან −20-მდე.",
        },
        {
          title: "Ptex შეკეთება",
          desc: "ვავსებთ სასრიალო ზედაპირის ნაკაწრებსა და დაზიანებებს.",
        },
        {
          title: "გარანტია სამუშაოზე",
          desc: "თუ რამე ისე არ გამოვა — კითხვების გარეშე გადავაკეთებთ.",
        },
      ],
      summerFeatures: [
        {
          title: "ველოსიპედების შეკეთება",
          desc: "სრული ციკლი: კამერის პუნქციიდან ტრანსმისიის სრულ მომსახურებამდე.",
        },
        {
          title: "ტრანსმისიის რეგულირება",
          desc: "ზუსტი გადართვა, ჯაჭვის, კასეტის და ტროსების შეცვლა.",
        },
        {
          title: "მუხრუჭები და ბორბლები",
          desc: "ჰიდრავლიკის დაჰაერება, ხუნდების შეცვლა და დისკური მუხრუჭების რეგულირება.",
        },
        {
          title: "გარანტია სამუშაოზე",
          desc: "თუ რამე ისე არ გამოვა — კითხვების გარეშე გადავაკეთებთ.",
        },
      ],
    },
    climbing: {
      heroTitle: "კლდეზე ცოცვა გონიო-კვარიათში",
      heroText:
        "ვარჯიშები ბუნებრივ რელიეფზე დამწყებებისთვის და გამოცდილებისთვის. სრული აღჭურვილობა, ზედა დაზღვევა და გამოცდილი ინსტრუქტორები — საშა და ეგორი.",
      book: "ჩაწერა",
      directions: "როგორ მივიდეთ",
      locationTitle: "ლოკაცია: გონიო-კვარიათის რაიონი",
      locationText: "მოსვლა შესაძლებელია საკუთარი მანქანით, ტაქსით, სამარშრუტო ტაქსით ან 16 ავტობუსით.",
      reviewLink: "ვარჯიშის შეფასების დატოვება",
      safetyTitle: "აღჭურვილობა და უსაფრთხოება",
      gearPoint: "პუნქტი 1 · აღჭურვილობა",
      gearIntro:
        "ვიყენებთ მხოლოდ ხარისხიან აღჭურვილობას სანდო საერთაშორისო ბრენდებისგან, რეგულარულად ვამოწმებთ და ვაახლებთ მას, და ყველა მონაწილეს სრულად ვამარაგებთ.",
      accessibilityPoint: "პუნქტი 2 · ხელმისაწვდომობა",
      accessibilityText:
        "ყოველი ვარჯიშის წინ ინსტრუქტაჟს ვატარებთ — დამწყებებს დეტალურად ვუხსნით, რას უნდა მოერიდონ. ვცოცავთ ზედა დაზღვევით: რთულ მონაკვეთზე ინსტრუქტორი დაგეხმარებათ. გონიო-კვარიათის რელიეფზე 5 და 6 კატეგორიის მარშრუტები ბევრ დამწყებსაც შეუძლია, განსაკუთრებით მათ, ვინც უკვე ყოფილა სკალადრომზე.",
      experiencePoint: "პუნქტი 3 · გამოცდილება",
      experienceText:
     "საშას ამ რელიეფზე მუშაობის დიდი გამოცდილება აქვს და მთელი ვარჯიშის განმავლობაში ზრუნავს თქვენზე." ,   scheduleTitle: "გრაფიკი და განრიგი",
      trainingPrice: "ვარჯიშის ფასი:",
      back: "უკან",
      forward: "წინ",
      photoAlt: (n: number) => `კლდეზე ცოცვა ${n}`,
      gear: [
        { title: "დინამიკური თოკი", desc: "გაწყვეტის გამძლეობა 22 კნ (2200 კგ)." },
        { title: "ჩაფხუტი", desc: "უძლებს 50 ჯ ძალის პირდაპირ ვერტიკალურ დარტყმას." },
        { title: "დაზღვევის სისტემა", desc: "ფიქსირდება სამ წერტილში, 150 კგ-მდე." },
        { title: "დაზღვევის სადგური", desc: "2 ფიქსაციის წერტილი, გამაგრებულია ორი საწინააღმდეგო მიმართულების კარაბინით." },
        { title: "მაგნეზია", desc: "შთანთქავს ტენს და აუმჯობესებს კლდეზე მოჭიდებას." },
        { title: "სკალური ფეხსაცმელი", desc: "კლდეზე უკეთესი დაჭერისთვის." },
      ],
      team: [
        { name: "საშა", role: "ინსტრუქტორი" },
        // { name: "ეგორი", role: "ინსტრუქტორი" },
      ],
      schedule: [
        { day: "კვირა", price: "50 ₾", slots: ["1 ჯგუფი — 14:00 - 17:00", "2 ჯგუფი — 17:30 - 20:30"] },
      ],
    },
    mobileNav: {
      aria: "ქვედა ნავიგაცია",
      home: "მთავარი",
      shop: "მაღაზია",
      rental: "ქირაობა",
      hikes: "ლაშქრობები",
      cart: "კალათა",
    },
  },
} as const;

export function getSiteText(lang: Lang) {
  return SITE_TEXT[lang] ?? SITE_TEXT.RU;
}
