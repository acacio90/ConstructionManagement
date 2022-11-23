import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { SIGNIN, HOME } from "./routes/routes";
import { SignIn, Home } from "./pages";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#18181B",
    },
    secondary: {
      main: "#11cb5f",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<Home />} />;
          <Route path={SIGNIN} element={<SignIn />} />;
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
