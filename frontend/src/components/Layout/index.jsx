import React from "react";
import { TopNav, Footer } from "../index";
import Box from "@mui/material/Box";

export const Layout = ({ children }) => {
  return (
    <Box sx={{ height: "auto", display: "flex", minHeight: "100vh" }}>
      <TopNav />
      <div
        style={{
          marginTop: "8vh",
          marginBottom: "10vh",
          width: "100vw",
          backgroundColor: "#D5D7F2",
        }}
      >
        {children}
      </div>
      <Footer />
    </Box>
  );
};
