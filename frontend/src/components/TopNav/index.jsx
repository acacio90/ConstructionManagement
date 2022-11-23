import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export class TopNav extends React.Component {
  render() {
    return (
      <AppBar
        className="header"
        sx={{
          position: "static !important",
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
