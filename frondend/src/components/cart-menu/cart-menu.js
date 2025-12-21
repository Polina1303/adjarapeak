import { Box, Typography, Divider, Button } from "@mui/material";
// import { Button } from "../button";
import { CartItem } from "../cart-item";
import { calcTotalPrice } from "../utils";

export const CartMenu = ({ items, onClick, closeMenu }) => {
  return (
    <Box p={2}>
      <Divider />
      <Box my={2} pl={2}>
        {items && items.length > 0 ? (
          items.map((item) => (
            <CartItem
              key={item.id}
              img={item.img}
              price={item.price}
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
            my={2}
            p={2}
            sx={{ fontFamily: "RoadRadio-Light, sans-serif" }}
          >
            <Typography variant="subtitle1">ИТОГО:</Typography>
            <Typography variant="subtitle1">
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
