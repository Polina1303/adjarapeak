import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import CheckIcon from "@mui/icons-material/Check";
import { Typography, Box, Stack, Divider } from "@mui/material";

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
      <Box
        sx={{
          fontFamily: "RoadRadio, sans-serif",
          margin: "10px 0px",
          p: 4,
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, textAlign: "left", mb: 3 }}
        >
          Условия доставки
        </Typography>

        <Stack spacing={3}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Для заказа до 300 лари по Батуми
            </Typography>
            <Typography variant="body1">Стоимость доставки: 10 лари</Typography>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Для заказа от 300 лари по Батуми
            </Typography>
            <Typography variant="body1">Доставка: бесплатно</Typography>
          </Box>

          <Divider />

          <Box>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, color: "primary.main" }}
            >
              Для заказа до 500 лари по Грузии
            </Typography>
            <Typography variant="body1">Стоимость доставки: 20 лари</Typography>
          </Box>

          <Box>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, color: "primary.main" }}
            >
              Для заказа от 500 лари по Грузии
            </Typography>
            <Typography variant="body1">Доставка: бесплатно</Typography>
          </Box>

          <Divider />

          <Typography variant="body2" sx={{ mt: 2, color: "text.secondary" }}>
            Внешний вид и комплектность товара и заказа должны быть проверены
            при получении.
          </Typography>

          <Typography variant="body2" sx={{ mt: 1 }}>
            Оптимальный вариант доставки в Ваш город вам предложат наши
            менеджеры по WhatsApp или по телефону:
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              mt: 1,
              textAlign: "center",
              color: "primary.main",
            }}
          >
            +995 511 147 586 &nbsp;&nbsp;|&nbsp;&nbsp; +995 551 132 803
          </Typography>
        </Stack>
      </Box>
    </>
  );
};
