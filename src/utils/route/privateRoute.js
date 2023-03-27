/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */
import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute(props) {
  const isAuthenticated = localStorage.getItem("token");
  const location = useLocation();
  const roleUser = useSelector((state) => state.user.data.roles);

  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  if (props.isAdmin && roleUser !== "admin") {
    return <Navigate to="/notfound" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
