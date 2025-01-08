import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./rock-climbing-page.css";
import img1 from "./IMG_5450.JPG";
import img2 from "./IMG_5451.JPG";
import img3 from "./IMG_5459.JPG";
import img4 from "./IMG_5462.JPG";
import img5 from "./IMG_5464.JPG";
import img6 from "./IMG_5465.JPG";
import al from "./al.JPG";
import eg from "./eg.JPG";
import { useInView } from "react-intersection-observer";

// import videoFile from './mov.mov'; // Импортируем файл как модуль

export const RockClimbingPage = () => {
  const languages = useSelector((state) => state.languages.currentLanguages);
  const history = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <>
      <div className="back-button-cover">
        <button className="back-button" onClick={() => history(-1)}>
          <IoIosArrowBack size={"25px"} />{" "}
          {languages === "RU" ? "Назад" : "Back"}
        </button>
      </div>

      <h2>🧗🏻‍♂️Информация о месте тренировок</h2>
      <a
        href="https://www.google.com/maps?q=41.553927,41.564936"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "#de682d" }}
      >
        📍 Локация: район Гонио-Квариати
      </a>

      <p style={{ paddingLeft: "20px", marginTop: "-0px", fontSize: "12px" }}>
        Координаты: 41.553927, 41.564936
      </p>

      <span>
        Добраться можно на своем авто, такси, маршрутном такси или 16 автобусе.
      </span>

      <h2>🧗🏻‍♂️Инструкторы и безопасность</h2>
      {/* <h3 class="main-title-rock">ТЫ НЕ ПОВЕРИШЬ, НО СКАЛОЛАЗАНИЕ БЕЗОПАСНО!</h3>
  <p class="intro">Расскажем подробнее, правда ли скалы с нами так безопасны.</p> */}

      <section class="point">
        <h4 class="point-title">ПУНКТ 1 (СНАРЯЖЕНИЕ)</h4>
        <ul class="point-list">
          <li>
            Мы используем только качественное снаряжение от всеми известных и
            надежных брендов.
          </li>
          <li>Мы регулярно проверяем и обновляем снаряжение.</li>
          <li>
            Мы полностью обеспечиваем вас необходимым снаряжением для
            комфортной, а главное безопасной тренировки (каска, верёвка,
            страховочная система, магнезия, скальные туфли)
          </li>
        </ul>
        <p class="details-title">Подробнее:</p>
        <ul class="details-list">
          <li>Верёвка динамическая - удержание на разрыв 22кН (2200 кг).</li>
          <li>
            Каска - выдерживает прямой вертикальный удар силой 50 Дж = 5 кг
            камень, упавший с метровой высоты.
          </li>
          <li>
            Система страховочная - фиксируется на человеке сразу в трех местах,
            наши системы подходят для людей до 150 кг.
          </li>
          <li>
            Станция страховочная - состоит из 2 точек фиксации и усиливается 2
            разнонаправленными карабинами, таким образом фактор риска сводится к
            минимуму.
          </li>
          <li>Магнезия - поглощает влагу и усиливает сцепление со скалой.</li>
          <li>Скальные туфли - для лучшего удержания на скале.</li>
        </ul>
        <div class="image-gallery">
          <img ref={ref} src={img1} alt="Снаряжение 1" class="gallery-image" />
          <img ref={ref} src={img2} alt="Снаряжение 2" class="gallery-image" />
          <img ref={ref} src={img5} alt="Снаряжение 5" class="gallery-image" />
          <img ref={ref} src={img3} alt="Снаряжение 3" class="gallery-image" />
          <img ref={ref} src={img4} alt="Снаряжение 4" class="gallery-image" />
          <img ref={ref} src={img6} alt="Снаряжение 6" class="gallery-image" />
        </div>
      </section>

      <section class="point">
        <h4 class="point-title">ПУНКТ 2 (ДОСТУПНОСТЬ)</h4>
        <p class="point-description">
          Мы проводим инструктаж перед каждой тренировкой, для новеньких мы
          подробно объясняем чего делать не стоит, этих пунктов всего парочку (и
          они есть в прошлых постах). Мы лазаем с верхней страховкой, там где
          вам не хватает навыков - включается сила инструктора, и он вас может
          просто подтянуть вверх на сложном участке. На рельефе Гонио-Квариати
          (место тренировок) трассы 5 и 6 категории, которые доступны многим
          начинающим и особенно тем, кто уже бывал на скалодроме. В этом месте
          мы регулярно лазаем сами, и часто там можно заметить даже детей и
          инструктора из местной школы скалолазания.
        </p>
      </section>

      <section class="point">
        <h4 class="point-title">ПУНКТ 3 (ОПЫТ)</h4>
        <p class="point-description">
          Наша команда (Саша и Егор) имеет колоссальный опыт работы на этом
          рельефе и огромный запас знаний и сил, чтобы заботиться о вас во время
          тренировки. Да, скалы - это нелегко и не для всех, но с нашей командой
          у вас точно получится! Слушайте инструктора и наслаждайтесь!
        </p>
        <div class="image-gallery">
          <img src={al} alt="Снаряжение 1" class="gallery-image-instructor" />
          <img src={eg} alt="Снаряжение 2" class="gallery-image-instructor" />
        </div>
      </section>
      <h2>🧗🏻‍♂️График и расписание</h2>
      <div class="day-card">
        <h5 class="day-title">Суббота</h5>
        <p class="price">Стоимость тренировки: 49 лари</p>

        <div class="session">
          <span class="group-time">1 группа — 11:00</span>
        </div>
        <div class="session">
          <span class="group-time">2 группа — 15:00</span>
        </div>
        <a
          href="https://t.me/shpaksn"
          target="_blank"
          rel="noreferrer"
          class="register-button"
        >
          Записаться
        </a>
      </div>
      <div class="day-card">
        <h5 class="day-title">Воскресенье</h5>
        <p class="price">Стоимость тренировки: 49 лари</p>

        <div class="session">
          <span class="group-time">1 группа — 11:00</span>
        </div>
        <div class="session">
          <span class="group-time">2 группа — 15:00</span>
        </div>
        <a
          href="https://t.me/shpaksn"
          target="_blank"
          rel="noreferrer"
          class="register-button"
        >
          Записаться
        </a>
      </div>

      {/* <ol>
        <li>
        Рюкзаки — удобные и прочные рюкзаки с возможностью распределения нагрузки.
        </li>
        <li>
        Палатка и спальники — легкие, но теплые и удобные для ночевок под открытым небом.

        </li>
        <li>
        Обувь и одежда — влагостойкие ботинки, термобелье, куртки и штормовки для защиты от непогоды.        </li>
        <li>
        GPS — хоть тропа и размечена, мы также решили подстраховаться и взяли навигацию.
        </li>
        <li>
       Аптечка — обязательно возьмите с собой набор для оказания первой помощи, особенно для защиты от солнца и лечения мелких травм.
        </li>
        <li>Не забывайте о запасах воды и питания. В некоторых частях тропы нет воды и магазинов, так что возьмите фильтры и сушеную еду.</li>
       </ol> */}
      {/* 
       <h2 >Онлайн-трансляция нашего путешествия       </h2>
       <span>
Хотите следить за нашим маршрутом в реальном времени? Мы организовали онлайн-трансляцию с отображением нашего передвижения на карте! Это позволит вам увидеть, какой путь мы прошли, где остановились. Такой формат даст вам возможность буквально «идти» вместе с нами и наблюдать, как мы преодолеваем трудности Ликийской тропы.
</span>
<br/>
<a href="https://eur-share.explore.garmin.com/adjarapeak" target="_blank" rel="noopener noreferrer">

<span  style={{
  backgroundColor: '#f9c74f',
  color: '#333',
  padding: '5px 10px',
  borderRadius: '5px', 
  fontWeight: 'bold',

}} >Следить за перемещениями </span>


</a>
<p className="routes-item-page" style={{ color: 'orange',marginTop:'10px' }}>
  Пароль для входа: LyciawithAdjpeak
</p>

<p>Наша цель — вдохновить больше людей отправляться на природу, открывать для себя новые маршруты и понимать, насколько важно качественное снаряжение. Мы приглашаем вас в это виртуальное путешествие вместе с Adjarapeak, и если наш опыт поможет вам собрать свой рюкзак и отправиться в дорогу, значит, мы достигли своей цели!</p>
<p>Увидимся на Ликийской тропе!</p> */}
    </>
  );
};
