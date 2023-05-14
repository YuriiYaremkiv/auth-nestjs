import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";

export const PageAuth = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <Box
        sx={{
          width: isNonMobileScreens ? "40%" : "93%",
          p: "2rem",
          m: "2rem auto",
          border: "1px solid gray",
          borderRadius: "1.5rem",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
