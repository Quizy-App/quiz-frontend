import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Navigate, Outlet } from "react-router-dom";
import { getProfileInfo } from "../../fetchers/getFunction";
import { useAppSelector } from "../../hooks/stateHooks";
import apiUrl from "../../utils/apiUrl";

const PrivateRoute = () => {
  const { accessToken, userType } = useAppSelector((state) => state.user);

  const { data } = useQuery(["profile"], getProfileInfo);

  // const { authToken, userType } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, []);

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

  // useEffect(() => {

  // }, []);

  useEffect(() => {
    setDefaultToken();
  }, [accessToken]);
  return accessToken ? <Outlet /> : <Navigate to={`/${userType}/auth`} />;
};

export default PrivateRoute;
