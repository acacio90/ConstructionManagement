import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export class Footer extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          position: "fixed",
          width: "100vw",
          height: "10vh",
          backgroundColor: "blue",
          top: "auto",
          bottom: 0,
        }}
      >
        <div
          style={{
            width: "10vw",
            display: "flex",
            justifyContent: "center",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          weeds
        </div>
      </div>
    );
  }
}
