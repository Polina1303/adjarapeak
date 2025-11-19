import { useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import { Container, Typography, Box, Stack, Link, Paper } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { Title } from "../../components/contact-title";
import style from "./contact-page.module.css";

export default function ContactPage() {
  const languages = useSelector((state) => state.languages.currentLanguages);
  const router = useRouter();

  return (
    <>
      <div className={style["back-button-cover"]}>
        <button className={style["back-button"]} onClick={() => router.back()}>
          <IoIosArrowBack size={"25px"} />{" "}
          {languages === "RU" ? "Назад" : "Back"}
        </button>
      </div>
      <Container sx={{ py: 5 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography
            variant="h3"
            component="h3"
            gutterBottom
            fontWeight="bold"
            textAlign="left"
            fontFamily="RoadRadio"
          >
            {languages === "RU" ? "Контакты" : "Contact"}
          </Typography>
          <Stack spacing={3}>
            <Box display="flex" alignItems="flex-start" gap={2}>
              <RoomIcon color="primary" sx={{ mt: 0.3, color: "#de682d" }} />
              <Box>
                <Title>
                  {languages === "RU" ? "Наш адрес" : "Our address"}
                </Title>
                <Typography variant="body1" fontFamily="RoadRadio">
                  {languages === "RU"
                    ? "Батуми, ул. Генерала Аслана Абашидзе, 19"
                    : "Batumi, st. General Aslan Abashidze, 19"}
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="flex-start" gap={2}>
              <AccessTimeIcon sx={{ mt: 0.3, color: "#de682d" }} />
              <Box>
                <Title>
                  {languages === "RU" ? "Время работы" : "Opening hours"}
                </Title>
                <Typography variant="body1" fontFamily="RoadRadio">
                  {languages === "RU"
                    ? "Ежедневно с 11:00 до 20:00"
                    : " Daily from 11:00 to 20:00"}
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="flex-start" gap={2}>
              <PhoneIcon color="primary" sx={{ mt: 0.3, color: "#de682d" }} />
              <Box>
                <Title>{languages === "RU" ? " Телефоны" : "Phones"}</Title>
                <Typography variant="body1">
                  <Link
                    href="tel:+995511147586"
                    underline="hover"
                    sx={{
                      color: "#000000ff",
                      fontFamily: "RoadRadio",
                      "&:hover": {
                        color: "#bf561f",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    +995 511 147 586
                  </Link>
                  <br />
                  <Link
                    href="tel:+995551132803"
                    underline="hover"
                    sx={{
                      color: "#000000ff",
                      fontFamily: "RoadRadio",
                      "&:hover": {
                        color: "#bf561f",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    +995 551 132 803
                  </Link>
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="flex-start" gap={2}>
              <ReviewsIcon color="primary" sx={{ mt: 0.3, color: "#de682d" }} />
              <Box>
                <Title>{languages === "RU" ? "Отзывы" : "Reviews"}</Title>
                <Stack direction="row" spacing={2}>
                  <Link
                    href="https://www.google.com/maps/place/Adjara+Peak/@41.6330368,41.6104566,17z/data=!4m8!3m7!1s0x4067858105d2e915:0x5a619f050a0a9584!8m2!3d41.6330328!4d41.6130369!9m1!1b1!16s%2Fg%2F11t40_rjr5?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{
                      color: "#de682d",
                      fontWeight: 500,
                      textDecoration: "none",
                      "&:hover": {
                        color: "#bf561f",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {languages === "RU"
                      ? "Оставь отзыв в Google"
                      : "Leave a review on Google"}
                  </Link>
                  <Link
                    href="https://yandex.com.ge/maps/org/adzhara_pik/33060720484/reviews/?ll=41.613251%2C41.633090&mode=search&sll=41.613252%2C41.633089&source=serp_navig&tab=reviews&text=%D0%B0%D0%B4%D0%B6%D0%B0%D1%80%D0%B0%D0%BF%D0%B8%D0%BA&z=16"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{
                      color: "#de682d",
                      fontWeight: 500,
                      textDecoration: "none",
                      "&:hover": {
                        color: "#bf561f",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {languages === "RU"
                      ? "Оставь отзыв в Яндекс"
                      : "Leave a review on Yandex"}
                  </Link>
                </Stack>
              </Box>
            </Box>

            <Box display="flex" alignItems="flex-start" gap={2}>
              <Title>
                {languages === "RU"
                  ? "Соцсети Adjara Peak:"
                  : "Follow Adjara Peak:"}
              </Title>
              <div className={style["social-icons"]}>
                <Link
                  href="https://www.instagram.com/adjarapeak/?igshid=YmMyMTA2M2Y%3D"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <BsInstagram />
                </Link>
                <Link
                  href="https://t.me/adjarapeak/229"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                >
                  <BsTelegram />
                </Link>
                <Link
                  href="https://wa.me/995511147586"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  <AiOutlineWhatsApp />
                </Link>
              </div>
            </Box>
          </Stack>
          <Paper
            elevation={3}
            sx={{ mt: 3, borderRadius: 4, overflow: "hidden" }}
          >
            <Box sx={{ width: "100%", height: "400px" }}>
              <iframe
                title="Adjara Peak"
                width="100%"
                height="100%"
                loading="lazy"
                frameBorder="0"
                allowFullScreen=""
                style={{ border: 0, display: "block" }}
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=41.63342805662303,%2041.61548271005293+(Adjara%20Peak%20%7C%20Sport,%20Hiking,%20Ski%20&amp;%20Outdoor%20Equipment%20-%20rental%20and%20sales)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/">gps vehicle tracker</a>
              </iframe>
            </Box>
          </Paper>
        </Paper>
      </Container>
    </>
  );
}
