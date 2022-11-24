import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { HOME, INDEXFUNCTIONARY } from "../../routes/routes";

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
          minHeight: "40px",
        }}
      >
        <Grid container sx={{ width: "100%", height: "100%" }}>
          <Grid
            item
            xs={10}
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <Link href={HOME}>
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  width: "auto",
                  height: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    marginTop: "normal",
                    color: "white",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  Home
                </Typography>
              </Button>
            </Link>
            <Link href={INDEXFUNCTIONARY}>
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  width: "auto",
                  height: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    marginTop: "normal",
                    color: "white",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  Funcionários
                </Typography>
              </Button>
            </Link>
            <Link href="#">
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  width: "auto",
                  height: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    marginTop: "normal",
                    color: "white",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  Orçamentos
                </Typography>
              </Button>
            </Link>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ margin: "auto" }}>
              <PersonIcon />
            </Avatar>
          </Grid>
        </Grid>
      </AppBar>
    );
  }
}
