import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SIGNIN, SIGNUP } from "./routes/routes";
import { SignIn, SignUp } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={SIGNIN} element={<SignIn />} />;
        <Route path={SIGNUP} element={<SignUp />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
