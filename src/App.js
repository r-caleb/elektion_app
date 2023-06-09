/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";
// import OnePoste from "pages/LandingPages/Actualites/sections/OnePoste";
// import OnePoste from "pages/LandingPages/OneActualite/sections/OnePoste";
// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";
import Candidat from "pages/LandingPages/OneCandidat";
import Parti from "pages/LandingPages/OneParti";
import Centre from "pages/LandingPages/OneCentre";

// Material Kit 2 React routes
import routes from "routes";
import OneActualite from "pages/LandingPages/OneActualite";
import OneTexte from "pages/LandingPages/OneTexte";
import OneCampagne from "pages/LandingPages/OneCampagne";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/presentation" element={<Presentation />} />
        <Route exact path="/pages/candidat/:nom" element={<Candidat />} />
        <Route exact path="/pages/parti/:nom" element={<Parti />} />
        <Route exact path="/pages/centre/:province" element={<Centre />} />
        <Route path="*" element={<Navigate to="/presentation" />} />
        <Route path="/news/:id" element={<OneActualite />} />
        <Route path="/legaltext/:nom" element={<OneTexte />} />
        <Route path="/campaign/:id" element={<OneCampagne />} />
      </Routes>
    </ThemeProvider>
  );
}
