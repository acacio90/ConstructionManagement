import React from "react";
import { TopNav, Footer } from "../index";
import Box from "@mui/material/Box";

export const Layout = ({ children }) => {
  return (
    <Box component="header" sx={{ height: "100%" }}>
      <TopNav />
      {children}
      <Footer />
    </Box>
  );
};
