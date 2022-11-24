import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Layout } from "../../components";

const theme = createTheme();
export class Home extends React.Component {
  render() {
    return <Layout>HOMEEE</Layout>;
  }
}
