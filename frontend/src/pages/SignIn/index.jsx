import * as React from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

export class SignIn extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container
          component="main"
          maxWidth="sm"
          sx={{
            height: "100vh",
            alignItems: "center",
          }}
        >
          <Grid container>
            <Grid item xs={12}>
              <div style={{ height: "33vh" }}></div>
            </Grid>
            <Grid item xs={12} sx={{ height: "33vh" }}>
              <Box
                sx={{
                  bgcolor: "#FAFAFA",
                  flexDirection: "column",
                  display: "flex",
                  alignItems: "center",
                  padding: "2vw",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "black" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography
                  variant="h5"
                  sx={{ marginTop: "normal", color: "black" }}
                >
                  Entrar
                </Typography>
                <form>
                  <TextField
                    margin="normal"
                    id="email"
                    label="Email"
                    fullWidth
                    autoFocus
                    autoComplete="email"
                  />
                  <TextField
                    margin="normal"
                    id="password"
                    label="Senha"
                    fullWidth
                    autoFocus
                  />
                  <Button variant="contained" color="primary" fullWidth>
                    enviar
                  </Button>
                  <Link
                    underline="none"
                    to="#"
                    variant="body2"
                    sx={{ textDecoration: "none", color: "#18181B" }}
                  >
                    Esqueceu a senha?
                  </Link>
                </form>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <div style={{ height: "33vh" }}></div>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}
