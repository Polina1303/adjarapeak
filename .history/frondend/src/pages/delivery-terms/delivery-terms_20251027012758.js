import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import CheckIcon from "@mui/icons-material/Check";
import { Typography, Box, Link, Paper, Divider } from "@mui/material";
import { LocalShipping, Support } from "@mui/icons-material";

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
      <Box sx={{ maxWidth: 700, mx: "auto", p: 3 }}>
        {/* Заголовок */}
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 600,
            textAlign: "center",
            mb: 4,
          }}
        >
          Условия доставки
        </Typography>

        {/* Основные условия доставки */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 4,
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <LocalShipping color="primary" sx={{ mr: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Условия по регионам
            </Typography>
          </Box>

          {/* Батуми */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, color: "primary.main", mb: 1 }}
            >
              🏙️ Батуми
            </Typography>
            <Box sx={{ pl: 2 }}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography variant="body1">Заказ до 300 лари</Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  10 лари
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body1">Заказ от 300 лари</Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 600, color: "success.main" }}
                >
                  Бесплатно
                </Typography>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Вся Грузия */}
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, color: "primary.main", mb: 1 }}
            >
              🗺️ Вся Грузия
            </Typography>
            <Box sx={{ pl: 2 }}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography variant="body1">Заказ до 500 лари</Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  20 лари
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body1">Заказ от 500 лари</Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 600, color: "success.main" }}
                >
                  Бесплатно
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>

        {/* Важное примечание */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            mb: 4,
            backgroundColor: "warning.light",
            border: "1px solid",
            borderColor: "warning.main",
            borderRadius: 2,
          }}
        >
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            ⚠️ Внешний вид и комплектность товара должны быть проверены при
            получении заказа
          </Typography>
        </Paper>

        {/* Контакты для консультации */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            backgroundColor: "primary.light",
            border: "1px solid",
            borderColor: "primary.main",
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <Support color="primary" sx={{ mr: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Нужна консультация по доставке?
            </Typography>
          </Box>

          <Typography variant="body1" paragraph sx={{ mb: 3 }}>
            Оптимальный вариант доставки в ваш город вам предложат наши
            менеджеры
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Link
              href="https://wa.me/995511147586"
              target="_blank"
              rel="noopener"
              variant="body1"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "success.main",
                color: "white",
                px: 3,
                py: 1,
                borderRadius: 2,
                textDecoration: "none",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "success.dark",
                },
              }}
            >
              💬 Написать в WhatsApp
            </Link>

            <Typography variant="body2" sx={{ mt: 1 }}>
              или звоните по телефонам:
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                href="tel:+995511147586"
                variant="body1"
                sx={{
                  fontWeight: 600,
                  textDecoration: "none",
                  color: "text.primary",
                }}
              >
                +995 511 147 586
              </Link>
              <Link
                href="tel:+995551132803"
                variant="body1"
                sx={{
                  fontWeight: 600,
                  textDecoration: "none",
                  color: "text.primary",
                }}
              >
                +995 551 132 803
              </Link>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};
