import React from "react";
import { TopNav, Footer } from "../index";
import Box from "@mui/material/Box";

export const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        height: "auto",
        display: "block",
        minHeight: "100vh",
        width: "100vw",
        bgcolor: "black",
      }}
    >
      <TopNav />
      <div
        style={{
          width: "100%",
          backgroundColor: "#D5D7F2",
          paddingTop: "8vh",
          paddingBottom: "10vh",
        }}
      >
        {children}
      </div>
      <Footer />
    </Box>
  );
};
