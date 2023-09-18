import { Navigate, Outlet } from "react-router-dom";

export const PortectedRoute = ({ children, redireccionar, permisos }) => {
  if (permisos) {
    return <Navigate to={redireccionar} />;
  }
  return children ? children : <Outlet />;
};
