import React from "react";
import "./home-page.css";
import { ProductItems } from "../../components/product-items";
import { RentItems } from "../../components/rent-items";

const PRODUCT = [
  {
    id: 1,
    title: "ПАЛАТКА BTRACE VANG 3",
    img: "/img/BTRACE-VANG3.png",
    desc: "3-х местная двухслойная палатка с двумя входами 340*220*120",
    category: "tent",
    price: 687,
  },
  {
    id: 2,
    title: "ПАЛАТКА BTRACE TRAVEL 2",
    img: "/img/BTRACE_TRAVEL2.jpg",
    desc: "2-х местная двухслойная палатка с двумя входами 250*220*120",
    category: "tent",
    price: 841,
  },
  {
    id: 3,
    title: "ПАЛАТКА BTRACE TRAVEL 3",
    img: "/img/BTRACE_TRAVEL3.jpg",
    desc: "3-х местная двухслойная палатка с двумя входами 320*220*120",
    category: "tent",
    price: 939,
  },
  {
    id: 4,
    title: "ПАЛАТКА BTRACE CHALLENGE 2",
    img: "BTRACE_CHALLENGE2.webp",
    desc: "3-х местная двухслойная палатка с двумя входами 300*210*120",
    category: "tent",
    price: 1021,
  },
  {
    id: 5,
    title: "СПАЛЬНЫЙ МЕШОК",
    img: "sleeping_bag_green.jpg",
    desc: "195*60см от +15 до 0",
    category: "sleeping bag",
    price: 90,
  },
  {
    id: 6,
    title: "СПАЛЬНЫЙ МЕШОК",
    img: "sleeping_bag_red.jpg",
    desc: "Сampsor 210*66см от +10 до 0",
    category: "sleeping bag",
    price: 160,
  },
  {
    id: 7,
    title: "СПАЛЬНЫЙ МЕШОК BTRACE MEGA ЛЕВЫЙ",
    img: "sleeping_bag_BTRACE_MEGA.webp",
    desc: "Утеплитель 195(+35)*100 от 0 до -21",
    category: "sleeping bag",
    price: 659,
  },
  {
    id: 8,
    title: "СПАЛЬНЫЙ МЕШОК BTRACE ZERO L SIZE ПРАВЫЙ",
    img: "BTRACE_ZERO_L.png",
    desc: "Супер лёгкий 220*90(55) от +15 до 0 ",
    category: "sleeping bag",
    price: 449,
  },
  {
    id: 9,
    title: "СПАЛЬНЫЙ МЕШОК BTRACE ZERO S SIZE ПРАВЫЙ",
    img: "BTRACE_ZERO_S.png",
    desc: "Супер лёгкий 190*80(50) от +15 до 0 ",
    category: "sleeping bag",
    price: 399,
  },
  {
    id: 10,
    title: "РЮКЗАК ТУРИСТИЧЕСКИЙ",
    img: "Сampsor_blue.jpg",
    desc: "75+10L Сampsor ",
    category: "backpack",
    price: 284,
  },
  {
    id: 11,
    title: "РЮКЗАК ТУРИСТИЧЕСКИЙ",
    img: "Cakard_black_backpack.jpg",
    desc: "95+10L Сakard ",
    category: "backpack",
    price: 210,
  },
  {
    id: 12,
    title: "РЮКЗАК ТУРИСТИЧЕСКИЙ",
    img: "thenorthс_grin.webp",
    desc: "60L THE NORTH FACE(REPLICA) ",
    category: "backpack",
    price: 199,
  },
  {
    id: 13,
    title: "РЮКЗАК ТУРИСТИЧЕСКИЙ",
    img: "THENORTHFACE_red.jpg",
    desc: "55L THE NORTH FACE(REPLICA) ",
    category: "backpack",
    price: 182,
  },
  {
    id: 14,
    title: "РЮКЗАК ТУРИСТИЧЕСКИЙ",
    img: "THENORTHFACE_blue.jpg",
    desc: "50L THE NORTH FACE(REPLICA) ",
    category: "backpack",
    price: 172,
  },
  {
    id: 15,
    title: "ФОНАРИК НАЛОБНЫЙ",
    img: "lantern_blue.jpg",
    desc: "X-BALOG BL-539 ",
    category: "lantern",
    price: 16,
  },
  {
    id: 16,
    title: "ФОНАРИК НАЛОБНЫЙ",
    img: "lantern_green.jpg",
    desc: "УЗ=918 ",
    category: "lantern",
    price: 24,
  },
  {
    id: 17,
    title: "ГАЗ ТУРИСТИЧЕСКИЙ",
    img: "gas450.jpg",
    desc: "Nurgaz 450GR ",
    category: "gas/burner",
    price: 52,
  },
  {
    id: 18,
    title: "ГАЗ ТУРИСТИЧЕСКИЙ",
    img: "gas230.jpg",
    desc: "Nurgaz 230GR ",
    category: "gas/burner",
    price: 36,
  },
  {
    id: 19,
    title: "ГАЗ ТУРИСТИЧЕСКИЙ",
    img: "gas80.jpg",
    desc: "Nurgaz 80GR ",
    category: "gas/burner",
    price: 28,
  },
  {
    id: 20,
    title: "ГОРЕЛКА ТУРИСТИЧЕСКИЙ",
    img: "burner32.jpg",
    desc: "Nurgaz TS-5310 ",
    category: "gas/burner",
    price: 32,
  },
  {
    id: 21,
    title: "ГОРЕЛКА ТУРИСТИЧЕСКИЙ",
    img: "Campsor_folding.jpg",
    desc: "Campsor (складная) ",
    category: "gas/burner",
    price: 49,
  },
  {
    id: 22,
    title: "КОВРИК ПЕНКА (с чехлом)",
    img: "mat_with_case.jpg",
    desc: "175*61*1см ",
    category: "mat",
    price: 54,
  },
  {
    id: 24,
    title: "КОВРИК ДЛЯ ПОХОДОВ И СПОРТА",
    img: "mat40.jpg",
    desc: "173*61*0,7см ",
    category: "mat",
    price: 40,
  },
  {
    id: 25,
    title: "КОВРИК С АЛЮМИНИЕВОЙ ФОЛЬГОЙ FORA",
    img: "mat_aluminum_foil_FORA.jpg",
    desc: "180*60*0,6см ",
    category: "mat",
    price: 35,
  },
  {
    id: 26,
    title: "ГЕРМОПАКЕТ BTRACE",
    img: "packageBTRACE.jpg",
    desc: "ПЛОСКИЙ ПВХ 20X13см",
    category: "accessories",
    price: 27,
  },
  {
    id: 27,
    title: "ОГНИВО BTRACE Ø 8 ММ",
    img: "flintBTRACE8.png",
    desc: "10х2,4х1,7см",
    category: "accessories",
    price: 39,
  },
  {
    id: 28,
    title: "КОЛЫШКИ BTRACE АЛЮМИНИЙ (КОМПЛЕКТ 10 ШТ.)",
    img: "aluminum_pegs_btrace.png",
    desc: "2шт-12₾",
    category: "accessories",
    price: 57,
  },
  {
    id: 29,
    title: "ЧАЙНИК ПОХОДНЫЙ BTRACE 1,1Л",
    img: "teapot_BTRACE1.jpg",
    desc: "Алюминий анодированный",
    category: "accessories",
    price: 114,
  },
  {
    id: 30,
    title: "CИДЕНЬЕ ТУРИСТИЧЕСКОЕ DECATHLON",
    img: "sitting_DECATHLON.png",
    desc: "Из пеноматериала с металлизированным слоем",
    category: "accessories",
    price: 16,
  },
  {
    id: 31,
    title: "ТРЕКИНГОВЫЕ ПАЛКИ DECATHLON",
    img: "trekking_poles_DECATHLON.avif",
    desc: "Комплекст из 2шт, алюминиевые ",
    category: "accessories",
    price: 80,
  },
  {
    id: 32,
    title: "ДОЖДЕВИК EVA RAINCOAT",
    img: "raincoat.jpg",
    desc: "С капюшоном 150см",
    category: "accessories",
    price: 19,
  },
  {
    id: 33,
    title: "ПОДУШКА НАДУВНАЯ INTEX",
    img: "inflatable_pillow_INTEX.webp",
    desc: "43*28*9см",
    category: "accessories",
    price: 20,
  },
  {
    id: 34,
    title: "ПОДУШКА-ПОДГОЛОВНИК INTEX",
    img: "pillow_headrest.webp",
    desc: "36*30*10см",
    category: "accessories",
    price: 22,
  },
  {
    id: 35,
    title: "СТУЛ СКЛАДНОЙ ПОХОДНЫЙ",
    img: "/img/folding_chair.jpg",
    desc: "35*26см вес 0,510кг",
    category: "accessories",
    price: 22,
  },
];

const RENT = [
  {
    id: 36,
    title: "ПАЛАТКА ARTEN LIGHT 2",
    img: "/product/arten_light2.png",
    desc: "2-х местная cамораскрывающаяся однослойная палатка 230*110*90",
    category: "rent",
    day: "будни",
    price: 15,
  },
  {
    id: 37,
    title: "ПАЛАТКА ARTEN LIGHT 2",
    img: "/product/arten_light2.png",
    desc: "2-х местная cамораскрывающаяся однослойная палатка 230*110*90",
    category: "rent",
    day: "выходные",
    price: 25,
  },
  {
    id: 38,
    title: "ПАЛАТКА ARTEN SPACE",
    img: "/product/ARTEN_SPACE.webp",
    desc: "2-х местная легкая однослойная палатка 210*150*120",
    category: "rent",
    day: "будни",
    price: 15,
  },
  {
    id: 39,
    title: "ПАЛАТКА ARTEN SPACE",
    img: "/product/ARTEN_SPACE.webp",
    desc: "2-х местная легкая однослойная палатка 210*150*120",
    category: "rent",
    day: "выходные",
    price: 25,
  },
  {
    id: 40,
    title: "ПАЛАТКА DECATHLON",
    img: "/product/DECATHLON2.avif",
    desc: "2-х местная двухслойная палатка 130*210*107",
    category: "rent",
    day: "будни",
    price: 20,
  },
  {
    id: 41,
    title: "ПАЛАТКА DECATHLON",
    img: "/product/DECATHLON2.avif",
    desc: "2-х местная двухслойная палатка 130*210*107",
    category: "rent",
    day: "выходные",
    price: 25,
  },
  {
    id: 42,
    title: "ПАЛАТКА DECATHLON",
    img: "/product/ПАЛАТКА DECATHLON2.avif",
    desc: "3-х местная двухслойная палатка 130*210*107",
    category: "rent",
    day: "будни",
    price: 20,
  },
  {
    id: 43,
    title: "ПАЛАТКА DECATHLON",
    img: "/product/ПАЛАТКА DECATHLON2.avif",
    desc: "3-х местная двухслойная палатка 130*210*107",
    category: "rent",
    day: "выходные",
    price: 30,
  },
  {
    id: 44,
    title: "ПАЛАТКА BESTWAY PAVILLO COOLDOME",
    img: "/product/bestwat_pavillo.jpg",
    desc: "3-х местная однослойная палатка 210*210*130",
    category: "rent",
    day: "будни",
    price: 15,
  },
  {
    id: 45,
    title: "ПАЛАТКА BESTWAY PAVILLO COOLDOME",
    img: "/product/bestwat_pavillo.jpg",
    desc: "3-х местная однослойная палатка 210*210*130",
    category: "rent",
    day: "выходные",
    price: 25,
  },
  {
    id: 46,
    title: "СПАЛЬНЫЙ МЕШОК BTRACE ZERO L SIZE ПРАВЫЙ",
    img: "/product/BTRACE_ZERO_L.png",
    desc: "Супер лёгкий 220*90(55) от +15 до 0 ",
    category: "rent",
    day: "будни",
    price: 15,
  },
  {
    id: 47,
    title: "СПАЛЬНЫЙ МЕШОК BTRACE ZERO L SIZE ПРАВЫЙ",
    img: "/product/BTRACE_ZERO_L.png",
    desc: "Супер лёгкий 220*90(55) от +15 до 0 ",
    category: "rent",
    day: "выходные",
    price: 25,
  },
  {
    id: 48,
    title: "СПАЛЬНЫЙ МЕШОК",
    img: "/product/sleeping_bag_green.jpg",
    desc: "195*60см от +15 до 0",
    category: "rent",
    day: "будни/выходные",
    price: 10,
  },
  {
    id: 49,
    title: "СПАЛЬНЫЙ МЕШОК",
    img: "/product/sleeping_bag_red.jpg",
    desc: "Сampsor 210*66см от +10 до 0",
    category: "rent",
    day: "будни/выходные",
    price: 10,
  },
  {
    id: 50,
    title: "РЮКЗАК ТУРИСТИЧЕСКИЙ ",
    img: "/product/DECATHLON_pinc.avif",
    desc: "50L Forclaz",
    category: "rent",
    day: "будни",
    price: 15,
  },
  {
    id: 51,
    title: "РЮКЗАК ТУРИСТИЧЕСКИЙ ",
    img: "/product/DECATHLON_pinc.avif",
    desc: "50L Forclaz",
    category: "rent",
    day: "выходные",
    price: 17,
  },
  {
    id: 480,
    title: "РЮКЗАК ТУРИСТИЧЕСКИЙ",
    img: "/product/THENORTHFACE_blue.jpg",
    desc: "50L THE NORTH FACE(REPLICA) ",
    category: "rent",
    day: "будни",
    price: 15,
  },
  {
    id: 490,
    title: "РЮКЗАК ТУРИСТИЧЕСКИЙ",
    img: "/product/THENORTHFACE_blue.jpg",
    desc: "50L THE NORTH FACE(REPLICA) ",
    category: "rent",
    day: "выходные",
    price: 17,
  },
  {
    id: 500,
    title: "ТРЕКИНГОВЫЕ ПАЛКИ DECATHLON",
    img: "/product/trekking_poles_DECATHLON.avif",
    desc: "Комплекст из 2шт, алюминиевые ",
    category: "rent",
    day: "будни",
    price: 5,
  },
  {
    id: 510,
    title: "ТРЕКИНГОВЫЕ ПАЛКИ DECATHLON",
    img: "/product/trekking_poles_DECATHLON.avif",
    desc: "Комплекст из 2шт, алюминиевые ",
    category: "rent",
    day: "выходные",
    price: 6,
  },
  {
    id: 520,
    title: "CИДЕНЬЕ ТУРИСТИЧЕСКОЕ DECATHLON",
    img: "/product/sitting_DECATHLON.png",
    desc: "Из пеноматериала с металлизированным слоем",
    category: "rent",
    day: "будни",
    price: 2,
  },
  {
    id: 530,
    title: "CИДЕНЬЕ ТУРИСТИЧЕСКОЕ DECATHLON",
    img: "/product/sitting_DECATHLON.png",
    desc: "Из пеноматериала с металлизированным слоем",
    category: "rent",
    day: "выходные",
    price: 3,
  },
  {
    id: 540,
    title: "КОВРИК ДЛЯ ПОХОДОВ И СПОРТА",
    img: "/product/mat40.jpg",
    desc: "173*61*0,7см ",
    category: "rent",
    day: "будни/выходные",
    price: 4,
  },
  {
    id: 550,
    title: "КОВРИК С АЛЮМИНИЕВОЙ ФОЛЬГОЙ FORA",
    img: "/product/mat_aluminum_foil_FORA.jpg",
    desc: "180*60*0,6см ",
    category: "rent",
    day: "будни/выходные",
    price: 4,
  },
  {
    id: 560,
    title: "ГОРЕЛКА ТУРИСТИЧЕСКИЙ",
    img: "/product/burner32.jpg",
    desc: "Nurgaz TS-5310 ",
    category: "rent",
    day: "будни",
    price: 3,
  },
  {
    id: 570,
    title: "ГОРЕЛКА ТУРИСТИЧЕСКИЙ",
    img: "/product/burner32.jpg",
    desc: "Nurgaz TS-5310 ",
    category: "rent",
    day: "выходные",
    price: 4,
  },
  {
    id: 580,
    title: "ГЕРМОПАКЕТ BTRACE",
    img: "/product/packageBTRACE.jpg",
    desc: "ПЛОСКИЙ ПВХ 20X13см",
    category: "rent",
    day: "будни",
    price: 3,
  },
  {
    id: 590,
    title: "ГЕРМОПАКЕТ BTRACE",
    img: "/product/packageBTRACE.jpg",
    desc: "ПЛОСКИЙ ПВХ 20X13см",
    category: "rent",
    day: "выходные",
    price: 4,
  },
  {
    id: 600,
    title: "ЧАЙНИК ПОХОДНЫЙ BTRACE 1,1Л",
    img: "/product/teapot_BTRACE1.jpg",
    desc: "Алюминий анодированный",
    category: "rent",
    day: "будни",
    price: 7,
  },
  {
    id: 610,
    title: "ЧАЙНИК ПОХОДНЫЙ BTRACE 1,1Л",
    img: "/product/teapot_BTRACE1.jpg",
    desc: "Алюминий анодированный",
    category: "rent",
    day: "выходные",
    price: 8,
  },
  {
    id: 620,
    title: "ФОНАРИК НАЛОБНЫЙ",
    img: "/product/lantern_blue.jpg",
    desc: "X-BALOG BL-539 ",
    category: "rent",
    day: "будни",
    price: 2,
  },
  {
    id: 630,
    title: "ФОНАРИК НАЛОБНЫЙ",
    img: "/product/lantern_blue.jpg",
    desc: "X-BALOG BL-539 ",
    category: "rent",
    day: "выходные",
    price: 2.5,
  },
  {
    id: 640,
    title: "СТУЛ СКЛАДНОЙ ПОХОДНЫЙ",
    img: "/product/folding_chair.jpg",
    desc: "35*26см вес 0,510кг",
    category: "rent",
    day: "будни",
    price: 3,
  },
  {
    id: 650,
    title: "СТУЛ СКЛАДНОЙ ПОХОДНЫЙ",
    img: "/product/folding_chair.jpg",
    desc: "35*26см вес 0,510кг",
    category: "rent",
    day: "выходные",
    price: 4,
  },
  {
    id: 660,
    title: "СТУЛ СКЛАДНОЙ ПОХОДНЫЙ",
    img: "/product/folding_chair.jpg",
    desc: "35*26см вес 0,510кг",
    category: "rent",
    day: "будни",
    price: 3,
  },
  {
    id: 670,
    title: "СТУЛ СКЛАДНОЙ ПОХОДНЫЙ",
    img: "/product/folding_chair.jpg",
    desc: "35*26см вес 0,510кг",
    category: "rent",
    day: "выходные",
    price: 4,
  },
  {
    id: 680,
    title: "ЗОНТ ПЛЯЖНЫЙ (СКЛАДНОЙ)",
    img: "/product/umbrella.jpg",
    desc: "35*26см вес 0,510кг",
    category: "rent",
    day: "будни",
    price: 3,
  },
  {
    id: 690,
    title: "ЗОНТ ПЛЯЖНЫЙ (СКЛАДНОЙ)",
    img: "/product/umbrella.jpg",
    desc: "35*26см вес 0,510кг",
    category: "rent",
    day: "выходные",
    price2: 4,
  },
  {
    id: 700,
    title: "ЗОНТ ПЛЯЖНЫЙ (СКЛАДНОЙ)",
    img: "/product/umbrella.jpg",
    desc: "35*26см вес 0,510кг",
    category: "rent",
    day: "будни",
    price: 3,
  },
  {
    id: 710,
    title: "ЗОНТ ПЛЯЖНЫЙ (СКЛАДНОЙ)",
    img: "/product/umbrella.jpg",
    desc: "35*26см вес 0,510кг",
    category: "rent",
    day: "выходные",
    price: 4,
  },
  {
    id: 720,
    title: "ТЕНТ ПОЛИЭСТЕР 4*4м",
    img: "/product/awning.jpg",
    desc: "35*26см вес 0,510кг",
    category: "rent",
    day: "будни",
    price: 5,
  },
  {
    id: 730,
    title: "ТЕНТ ПОЛИЭСТЕР 4*4м",
    img: "/product/awning.jpg",
    desc: "35*26см вес 0,510кг",
    category: "rent",
    day: "выходные",
    price: 6,
  },
];

export const HomePage = () => {
  return (
    <div>
      <div className="home-page"></div>
      <div className="title">ПРОДАЖА</div>
      <div className="home-page-product">
        {PRODUCT.map((product) => (
          <ProductItems key={product.id} product={product} />
        ))}
      </div>
      <div className="title">АРЕНДА</div>
      <div className="home-page-product">
        {RENT.map((rent) => (
          <RentItems key={rent.id} rent={rent} />
        ))}
      </div>
    </div>
  );
};