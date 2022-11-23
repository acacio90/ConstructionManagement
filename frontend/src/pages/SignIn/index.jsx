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

export class SignIn extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container
          component="main"
          maxWidth="sm"
          sx={{
            position: "relative",
            display: "flex",
            top: "30vh",
            alignItems: "center",
          }}
        >
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
            <form
              sx={{
                display: "flex",
              }}
            >
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
        </Container>
      </React.Fragment>
    );
  }
}
