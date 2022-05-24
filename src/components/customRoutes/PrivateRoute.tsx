import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Navigate, Outlet } from "react-router-dom";
import { logoutUser, profileSet } from "../../features/userSlice";
import { getProfileInfo } from "../../fetchers/getFunction";
import { useAppDispatch, useAppSelector } from "../../hooks/stateHooks";
import apiUrl from "../../utils/apiUrl";

const PrivateRoute = () => {
  const dispatch = useAppDispatch();
  const { accessToken, userType } = useAppSelector((state) => state.user);

  const { data, isLoading } = useQuery(["profile", userType], ({ queryKey }) =>
    getProfileInfo(queryKey[1] as string)
  );

  // const { authToken, userType } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!isLoading) {
      if (data?.student && userType === "student") {
        dispatch(profileSet(data?.student));
      } else if (data?.name && userType === "teacher") {
        dispatch(profileSet(data));
      }
      // else {
      //   dispatch(logoutUser());
      // }
    }
  }, [isLoading]);

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
