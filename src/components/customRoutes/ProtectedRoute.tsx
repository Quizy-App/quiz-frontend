import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/stateHooks";

const ProtectedRoute = () => {
  const { accessToken } = useAppSelector((state) => state.user);
  const { userType } = useAppSelector((state) => state.user);

  return !accessToken || !userType ? (
    <Outlet />
  ) : (
    <Navigate to={`/${userType}`} />
  );
};

export default ProtectedRoute;
