import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";

import { Layout } from "../../components";

const theme = createTheme();
export class Home extends React.Component {
  render() {
    return (
      <Container
        fullWidth
        sx={{
          position: "relative",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Layout></Layout>;
      </Container>
    );
  }
}
