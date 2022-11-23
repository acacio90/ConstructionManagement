import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";

export class TopNav extends React.Component {
  render() {
    return (
      <AppBar
        className="sdfsaf"
        sx={{
          height: "8vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid container sx={{ width: "100%", height: "100%" }}>
          <Grid item xs={11}>
            <ButtonGroup
              variant="contained"
              aria-label="text button group"
              sx={{ width: "100%", height: "100%" }}
            >
              <Button
                sx={{
                  color: "white",
                  width: "5vw",
                  height: "100%",
                }}
              >
                Home
              </Button>
              <Button
                sx={{
                  color: "white",
                  width: "5vw",
                }}
              >
                Item1
              </Button>
              <Button
                sx={{
                  color: "white",
                  width: "5vw",
                }}
              >
                Item2
              </Button>
              <Button
                sx={{
                  color: "white",
                  width: "5vw",
                }}
              >
                Item3
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid
            item
            xs={1}
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ width: "3vw", height: "5vh", margin: "auto" }}>
              <PersonIcon />
            </Avatar>
          </Grid>
        </Grid>
      </AppBar>
    );
  }
}
