import { useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { Container, Typography, Box, Stack, Link, Paper } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { AiOutlineWhatsApp, AiOutlinePhone } from "react-icons/ai";
import "./contact-page.css";

export const ContactPage = () => {
  const languages = useSelector((state) => state.languages.currentLanguages);
  const navigate = useNavigate();

  return (
    <>
      <div className="back-button-cover">
        <button className="back-button" onClick={() => navigate(-1)}>
          <IoIosArrowBack size={"25px"} />{" "}
          {languages === "RU" ? "Назад" : "Back"}
        </button>
      </div>
      <Container sx={{ py: 5 }}>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          fontWeight="bold"
          textAlign="left"
        >
          Контакты
        </Typography>

        <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
          <Stack spacing={3}>
            <Box display="flex" alignItems="flex-start" gap={2}>
              <RoomIcon color="primary" sx={{ mt: 0.3, color: "#de682d" }} />
              <Box>
                <Typography variant="h6">
                  {languages === "RU" ? "Наш адрес" : "Our address"}
                </Typography>
                <Typography variant="body1">
                  {languages === "RU"
                    ? "Батуми, ул. Генерала Аслана Абашидзе, 19"
                    : "Batumi, st. General Aslan Abashidze, 19"}
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="flex-start" gap={2}>
              <AccessTimeIcon sx={{ mt: 0.3, color: "#de682d" }} />
              <Box>
                <Typography variant="h6">Время работы</Typography>
                <Typography variant="body1">
                  Ежедневно с 11:00 до 20:00
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="flex-start" gap={2}>
              <PhoneIcon color="primary" sx={{ mt: 0.3, color: "#de682d" }} />
              <Box>
                <Typography variant="h6">Телефоны</Typography>
                <Typography variant="body1">
                  <Link href="tel:+995511147586" underline="hover">
                    +995 511 147 586
                  </Link>
                  <br />
                  <Link href="tel:+995551132803" underline="hover">
                    +995 551 132 803
                  </Link>
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="flex-start" gap={2}>
              <ReviewsIcon color="primary" sx={{ mt: 0.3, color: "#de682d" }} />
              <Box>
                <Typography variant="h6">Отзывы</Typography>
                <Stack direction="row" spacing={2}>
                  <Link
                    href="https://www.google.com/maps/place/Adjara+Peak/@41.6330368,41.6104566,17z/data=!4m8!3m7!1s0x4067858105d2e915:0x5a619f050a0a9584!8m2!3d41.6330328!4d41.6130369!9m1!1b1!16s%2Fg%2F11t40_rjr5?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{
                      color: "#de682d",
                      fontWeight: 500,
                      fontFamily: "",
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
              <Typography variant="h6" sx={{ mr: 2 }}>
                {languages === "RU"
                  ? "Соцсети Adjara Peak:"
                  : "Follow Adjara Peak:"}
              </Typography>
              <div className="social-icons">
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
        </Paper>
      </Container>
    </>
  );
};
