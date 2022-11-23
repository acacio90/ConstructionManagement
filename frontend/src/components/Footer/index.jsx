import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

export class Footer extends React.Component {
  render() {
    return (
      <AppBar
        className="footer"
        sx={{
          position: "relative",
          marginBottom: "0",
          display: "flex !important",
          flexDirection: "row !important",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.5vh 2.5vw",
        }}
      ></AppBar>
    );
  }
}
