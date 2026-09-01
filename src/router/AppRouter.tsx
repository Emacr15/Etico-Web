import { useEffect } from "react";

import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import { ContactPage } from "../pages/ContactPage";
import { HomePage } from "../pages/HomePage";
import { PricingPage } from "../pages/PricingPage";
import { ProjectDetailPage } from "../pages/ProjectDetailPage";
import { ProjectsPage } from "../pages/ProjectsPage";

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div key={location.pathname} className="route-transition">
      <Routes location={location}>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/proyectos"
          element={<ProjectsPage />}
        />

        <Route
          path="/proyectos/:slug"
          element={<ProjectDetailPage />}
        />

        <Route
          path="/planes"
          element={<PricingPage />}
        />

        <Route
          path="/contacto"
          element={<ContactPage />}
        />
      </Routes>
    </div>
  );
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
