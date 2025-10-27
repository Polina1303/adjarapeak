import { useSelector } from "react-redux";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import img1 from "../home-page/IMG_7669.JPG";
import img2 from "../home-page/IMG_7671.JPG";
import "./service-center-page.css";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material";

export const ServiceCenter = () => {
  const languages = useSelector((state) => state.languages.currentLanguages);

  const navigate = useNavigate();

  return (
    <>
      <div className="back-button-cover">
        <button className="back-button" onClick={() => navigate(-1)}>
          <IoIosArrowBack size={"25px"} /> Назад
        </button>
      </div>
      <section className="service-section">
        <h2 className="routes-title">
          {languages === "RU"
            ? "Сервисное обслуживание"
            : "Maintenance service"}
        </h2>
        <table className="service-table">
          <thead>
            <tr>
              <th>{languages === "RU" ? "Услуга" : "Service"}</th>

              <th>{languages === "RU" ? "Цена" : "Price"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {languages === "RU"
                  ? "Комплексное обслуживание - заточка кантов, чистка скользящей поверхности, снятие старого парафина, нанесение нового (парафины от +3 до -20, с шагом 6 градусов)"
                  : "Comprehensive Service - Edge sharpening, base cleaning, old wax removal, and new wax application (wax range from +3°C to -20°C, in 6-degree increments)."}{" "}
              </td>

              <td>~ 80 {languages === "RU" ? "лари" : "gel"}</td>
            </tr>
            <tr>
              <td>Заточка кантов</td>

              <td>~ 40 {languages === "RU" ? "лари" : "gel"}</td>
            </tr>
            <tr>
              <td>Консервация</td>

              <td>от 20 {languages === "RU" ? "лари" : "gel"}</td>
            </tr>
          </tbody>
        </table>

        <Paper
          sx={{
            p: 4,
            borderRadius: 3,
            background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          {/* Заголовок */}
          <Typography
            variant="h4"
            component="h2"
            align="center"
            sx={{
              mb: 4,
              fontWeight: 700,
              background: "linear-gradient(45deg, #1976d2, #2196f3)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            {languages === "RU" ? "ФОТО РАБОТЫ" : "PHOTO OF THE WORK"}
          </Typography>

          {/* Контейнер с изображениями */}
          <Grid container spacing={3}>
            {[img2, img1].map((img, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: 2,
                    overflow: "hidden",
                    transition: "all 0.3s ease-in-out",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                      "& img": {
                        transform: "scale(1.05)",
                      },
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={img}
                    alt={`Image ${index + 1}`}
                    sx={{
                      width: "100%",
                      height: 300,
                      objectFit: "cover",
                      transition: "transform 0.5s ease-in-out",
                      display: "block",
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </section>
    </>
  );
};
