import { Typography } from "@mui/material";
export const Title = ({ children }) => {
  return (
    <Typography variant="h6" sx={{ mr: 2, fontFamily: "RoadRadio-Bold" }}>
      {children}
    </Typography>
  );
};
