import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";
import { Typography, Box, Stack, Divider, Link } from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import "./delivery-terms.css";

export default function DeliveryTerms() {
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
      <Box className="delivery-terms-container">
        <Typography variant="h4" className="delivery-title">
          Условия доставки
        </Typography>
        <Stack spacing={3}>
          <Box>
            <Typography className="delivery-subtitle">
              Для заказа до 300 лари по Батуми
            </Typography>
            <Typography className="delivery-texts">
              Стоимость доставки: 10 лари
            </Typography>
          </Box>

          <Box>
            <Typography className="delivery-subtitle">
              Для заказа от 300 лари по Батуми
            </Typography>
            <Typography className="delivery-text-free">
              Доставка: бесплатно
            </Typography>
          </Box>

          <Divider />

          <Box>
            <Typography className="delivery-subtitle">
              Для заказа до 500 лари по Грузии
            </Typography>
            <Typography className="delivery-texts">
              Стоимость доставки: 20 лари
            </Typography>
          </Box>

          <Box>
            <Typography className="delivery-subtitle">
              Для заказа от 500 лари по Грузии
            </Typography>
            <Typography className="delivery-text-free">
              Доставка: бесплатно
            </Typography>
          </Box>

          <Divider />

          <Typography className="delivery-warning">
            <PriorityHighIcon className="warning-icon" /> Внешний вид и
            комплектность товара и заказа должны быть проверены при получении
          </Typography>

          <Typography className="delivery-contact-text">
            Оптимальный вариант доставки в Ваш город вам предложат наши
            менеджеры по
            <Link
              href="https://wa.me/995511147586"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="whatsapp-link"
            >
              WhatsApp
            </Link>
            или по телефону:
          </Typography>

          <Box className="phone-links-container">
            <Link
              href="tel:+995511147586"
              underline="hover"
              className="phone-link"
            >
              +995 511 147 586
            </Link>
            <p>|</p>
            <Link
              href="tel:+995551132803"
              underline="hover"
              className="phone-link"
            >
              +995 551 132 803
            </Link>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
