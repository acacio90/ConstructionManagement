import React from "react";
import { TopNav, Footer } from "../index";
import Box from "@mui/material/Box";

export const Layout = ({ children }) => {
  return (
    <div
      style={{
        display: "grid",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <TopNav />
      <div
        style={{
          width: "100vw",
          backgroundColor: "#D5D7F2",
          position: "relative",
          marginTop: "8vh",
          paddingBottom: "10vh",
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};
