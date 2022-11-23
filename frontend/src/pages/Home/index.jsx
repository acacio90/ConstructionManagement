import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { Layout } from "../../components";

const theme = createTheme();
export class Home extends React.Component {
  render() {
    return <Layout>Teste</Layout>;
  }
}
