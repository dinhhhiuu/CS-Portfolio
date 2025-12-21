import { Routes, Route, Navigate } from "react-router-dom";

import { ROUTES } from "@/const";

import MainPage from "@/pages/MainPage";
import CoursePage from "@/pages/CoursePage";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Accepted Routes */}
      <Route path={ROUTES.MAIN} element={<MainPage />} />
      <Route path={ROUTES.COURSE} element={<CoursePage />} />

      {/* 404 Not Found */}
      <Route path="*" element={<Navigate to={ROUTES.MAIN} replace />} />
    </Routes>
  );
};
