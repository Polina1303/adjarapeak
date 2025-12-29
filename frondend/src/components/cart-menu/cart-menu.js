import { Box, Typography, Divider, Button } from "@mui/material";
// import { Button } from "../button";
import { CartItem } from "../cart-item";
import { calcTotalPrice } from "../utils";

export const CartMenu = ({ items, onClick, closeMenu }) => {
  return (
    <Box>
      <Divider />
      <Box
        my={2}
        pl={2}
        sx={{
          maxHeight: {
            xs: "50vh",
            sm: "35vh",
          },
          overflowY: "auto",
        }}
      >
        {items && items.length > 0 ? (
          items.map((item) => (
            <CartItem
              key={item.id}
              img={item.img}
              price={item.salePrice ?? item.price}
              title={item.title}
              id={item.id}
              count={item.count}
            />
          ))
        ) : (
          <Typography>Корзина пуста</Typography>
        )}
      </Box>

      {items && items.length > 0 && (
        <>
          <Box
            display="flex"
            justifyContent="space-between"
            my={0.5}
            // p={1}
            sx={{ fontFamily: "RoadRadio-Light, sans-serif" }}
          >
            <Typography
              sx={{ fontFamily: "RoadRadio-Light, sans-serif" }}
              variant="subtitle1"
            >
              ИТОГО:
            </Typography>
            <Typography
              sx={{ fontFamily: "RoadRadio-Light, sans-serif" }}
              variant="subtitle1"
            >
              {calcTotalPrice(items)}.00₾
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button
              size="m"
              onClick={onClick}
              sx={{
                width: "50%",
                backgroundColor: "#f87736",
                color: "#fff",
                marginTop: "10px",
                fontFamily: "RoadRadio-Light, sans-serif",
                fontWeight: "400",
                fontSize: {
                  xs: "12px",
                  sm: "14px",
                },
              }}
              pl={2}
            >
              Оформить заказ
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};
