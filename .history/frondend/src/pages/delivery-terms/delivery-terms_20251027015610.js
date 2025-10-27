import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineWhatsApp } from "react-icons/ai";
import CheckIcon from "@mui/icons-material/Check";
import { Typography, Box, Stack, Divider, Link } from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

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
            <Typography variant="body1" sx={{ color: "green" }}>
              Доставка: бесплатно
            </Typography>
          </Box>

          <Divider />

          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Для заказа до 500 лари по Грузии
            </Typography>
            <Typography variant="body1">Стоимость доставки: 20 лари</Typography>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Для заказа от 500 лари по Грузии
            </Typography>
            <Typography variant="body1" sx={{ color: "green" }}>
              Доставка: бесплатно
            </Typography>
          </Box>

          <Divider />

          <Typography variant="body2" sx={{ mt: 2, color: "text.secondary" }}>
            <PriorityHighIcon sx={{ color: "red" }} /> Внешний вид и
            комплектность товара и заказа должны быть проверены при получении.
          </Typography>

          <Typography variant="body2" sx={{ mt: 1 }}>
            Оптимальный вариант доставки в Ваш город вам предложат наши
            менеджеры по{" "}
            {
              <Link
                href="https://wa.me/995511147586"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <AiOutlineWhatsApp />
              </Link>
            }
            или по телефону:
          </Typography>

          <Box
            sx={{
              fontWeight: 600,
              mt: 1,
              textAlign: "center",
              color: "primary.main",
            }}
          >
            <Link
              href="tel:+995511147586"
              underline="hover"
              sx={{
                color: "#000000ff",
                fontFamily: "RoadRadio-Thin",
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
                fontFamily: "RoadRadio-Thin",
                "&:hover": {
                  color: "#bf561f",
                  textDecoration: "underline",
                },
              }}
            >
              +995 551 132 803
            </Link>
          </Box>
        </Stack>
      </Box>
    </>
  );
};
