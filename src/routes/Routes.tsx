import { Routes, Route, Navigate } from "react-router-dom";

import { ROUTES } from "@/const";

import Layout from "@/layouts/Layout";

import MainPage from "@/pages/MainPage";
import CoursePage from "@/pages/ProjectPage";
import AboutMePage from "@/pages/AboutMePage";
import ContactPage from "@/pages/ContactPage";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Accepted Routes */}
      <Route path={ROUTES.MAIN} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={ROUTES.PROJECT} element={<CoursePage />} />
        <Route path={ROUTES.ABOUT} element={<AboutMePage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        {/* Redirect unknown routes to main */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
