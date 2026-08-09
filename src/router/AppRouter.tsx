import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { PricingPage } from "../pages/PricingPage";
import { ProjectDetailPage } from "../pages/ProjectDetailPage";
import { ProjectsPage } from "../pages/ProjectsPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
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
      </Routes>
    </BrowserRouter>
  );
}
