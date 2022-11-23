import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export class Footer extends React.Component {
  render() {
    return (
      <AppBar
        className="footer"
        sx={{ height: "10vh", top: "auto", bottom: "0" }}
      >
        <Grid container sx={{ width: "100%", height: "100%" }}>
          <Grid item xs={10} />
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography sx={{ margin: "auto" }}>Logoooo</Typography>
          </Grid>
        </Grid>
      </AppBar>
    );
  }
}
