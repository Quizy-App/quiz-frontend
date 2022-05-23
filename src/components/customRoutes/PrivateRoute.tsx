import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/stateHooks";
import apiUrl from "../../utils/apiUrl";

const PrivateRoute = () => {
  const { accessToken, userType } = useAppSelector((state) => state.user);
  // const { authToken, userType } = useAppSelector((state) => state.user);

  // Function to set default header auth token in axios
  const setDefaultToken = () => {
    axios.defaults.baseURL = apiUrl;
    if (accessToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }

    axios.interceptors.request.use(
      (request) => {
        return request;
      },
      (error: AxiosResponse<any, any>) => {
        return Promise.reject(error);
      }
    );
  };

  useEffect(() => {
    setDefaultToken();
  }, [accessToken]);
  return accessToken ? <Outlet /> : <Navigate to={`/${userType}/auth`} />;
};

export default PrivateRoute;
