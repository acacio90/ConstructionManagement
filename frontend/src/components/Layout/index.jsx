import React from "react";
import { TopNav, Footer } from "../index";
import Box from "@mui/material/Box";

export const Layout = ({ children }) => {
  return (
    <Box component="div" sx={{ height: "10vh" }}>
      <TopNav />
      {children}
      <Footer />
    </Box>
  );
};
