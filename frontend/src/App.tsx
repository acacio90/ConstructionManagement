import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import {
  SIGNIN,
  HOME,
  INDEXFUNCTIONARY,
  SHOWFUNCTIONARY,
} from "./routes/routes";

import { SignIn, Home, IndexFunctionary, ShowFunctionary } from "./pages";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#262842",
    },
    secondary: {
      main: "#262842",
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
          <Route path={INDEXFUNCTIONARY} element={<IndexFunctionary />} />;
          <Route path={SHOWFUNCTIONARY} element={<ShowFunctionary />} />;
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
