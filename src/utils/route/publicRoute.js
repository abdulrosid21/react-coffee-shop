/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-multiple-empty-lines */

import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function PublicRoute() {
  const isAuthenticated = localStorage.getItem("token");
  const location = useLocation();

  if (isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
