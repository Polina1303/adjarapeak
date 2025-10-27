import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { Typography, Box, Link, Card, CardContent } from "@mui/material";

export const DeliveryTerms = () => {
  const navigate = useNavigate();
  const languages = useSelector((state) => state.languages.currentLanguages);

  return (
    <>
      <div className="back-button-cover">
        <button className="back-button" onClick={() => navigate(-1)}>
          <IoIosArrowBack size={"25px"} />
          {languages === "RU" ? "Назад" : "Back"}
        </button>
      </div>
      <Box sx={{ maxWidth: 800, mx: "auto", p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Условия доставки
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          Внешний вид и комплектность товара проверяются при получении заказа.
        </Typography>

        {/* Сетка карточек */}
        <Box sx={{ display: "grid", gap: 3, mb: 4 }}>
          {/* Карточка Батуми */}
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary">
                Батуми
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: 1,
                }}
              >
                <Typography>Заказ до 300 лари</Typography>
                <Typography>10 лари</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: 1,
                }}
              >
                <Typography>Заказ от 300 лари</Typography>
                <Typography color="success.main">Бесплатно</Typography>
              </Box>
            </CardContent>
          </Card>

          {/* Карточка Грузия */}
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary">
                Вся Грузия
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: 1,
                }}
              >
                <Typography>Заказ до 500 лари</Typography>
                <Typography>20 лари</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: 1,
                }}
              >
                <Typography>Заказ от 500 лари</Typography>
                <Typography color="success.main">Бесплатно</Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Блок для консультации (остается таким же, как в Варианте 1) */}
        <Box sx={{ backgroundColor: "grey.50", p: 3, borderRadius: 1 }}>
          <Typography variant="h6" gutterBottom>
            Доставка в ваш город
          </Typography>
          <Typography variant="body1" paragraph>
            Оптимальный вариант доставки в ваш город вам предложат наши
            менеджеры.
          </Typography>
          <Typography variant="body1">
            Свяжитесь с нами:{" "}
            <Link
              href="https://wa.me/995511147586"
              target="_blank"
              rel="noopener"
            >
              WhatsApp
            </Link>{" "}
            или по телефонам:{" "}
            <Box component="span" sx={{ display: "block", mt: 0.5 }}>
              <Link href="tel:+995511147586">+995 511 147 586</Link>
              <br />
              <Link href="tel:+995551132803">+995 551 132 803</Link>
            </Box>
          </Typography>
        </Box>
      </Box>
    </>
  );
};
