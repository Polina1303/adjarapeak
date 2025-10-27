import { useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Box, Stack, Link, Paper } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import ReviewsIcon from "@mui/icons-material/Reviews";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

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
              <RoomIcon color="primary" sx={{ mt: 0.3 }} />
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
              <AccessTimeIcon color="primary" sx={{ mt: 0.3 }} />
              <Box>
                <Typography variant="h6">Время работы</Typography>
                <Typography variant="body1">
                  Ежедневно с 11:00 до 20:00, без выходных
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="flex-start" gap={2}>
              <PhoneIcon color="primary" sx={{ mt: 0.3 }} />
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
              <ReviewsIcon color="primary" sx={{ mt: 0.3 }} />
              <Box>
                <Typography variant="h6">Отзывы</Typography>
                <Stack direction="row" spacing={2}>
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                  >
                    Оставь отзыв в Google
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                  >
                    Оставь отзыв в Яндекс
                  </Link>
                </Stack>
              </Box>
            </Box>

            <Box display="flex" alignItems="flex-start" gap={2}>
              <Typography variant="h6" sx={{ mr: 2 }}>
                Социальные сети:
              </Typography>
              <Stack direction="row" spacing={2}>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <FacebookIcon color="primary" />
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon color="primary" />
                </Link>
              </Stack>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </>
  );
};
