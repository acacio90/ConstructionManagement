import React from "react";
import { TopNav, Footer } from "../index";
import Box from "@mui/material/Box";

export const Layout = ({ children }) => {
  return (
    <Box sx={{ height: "100vh", display: "flex" }}>
      <TopNav />
      <div style={{ marginTop: "8vh", marginBottom: "10vh", width: "100vw" }}>
        {children}
      </div>
      <Footer />
    </Box>
  );
};
