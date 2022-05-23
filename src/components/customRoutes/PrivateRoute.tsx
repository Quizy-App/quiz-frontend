import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/stateHooks";

const PrivateRoute = () => {
  const { accessToken, userType } = useAppSelector((state) => state.user);

  return accessToken ? <Outlet /> : <Navigate to={`/${userType}/auth`} />;
};

export default PrivateRoute;
