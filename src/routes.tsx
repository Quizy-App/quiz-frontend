import { Navigate, RouteObject } from "react-router-dom";
import PrivateRoute from "./components/customRoutes/PrivateRoute";
import ProtectedRoute from "./components/customRoutes/ProtectedRoute";
import StudentRoute from "./components/customRoutes/StudentRoute";
import TeacherRoute from "./components/customRoutes/TeacherRoute";
import Screen1 from "./components/screens/Screen1";
import { NotFound } from "./pages";

const routes: RouteObject[] = [
  // ------------ For Teacher Only ----------------
  {
    path: "teacher",
    element: <TeacherRoute />,
    children: [
      // ------------ Teacher's private routes ----------------
      {
        path: "/teacher",
        element: <PrivateRoute />,
        children: [
          {
            index: true,
            element: <Screen1 />,
          },
        ],
      },
      // ------------ Teacher's protected routes ----------------
      {
        path: "auth",
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <Screen1 />,
          },
          {
            path: "*",
            element: <Navigate to="/404_not_found" />,
          },
        ],
      },
      {
        path: "*",
        element: <Navigate to="/404_not_found" />,
      },
    ],
  },
  // ------------ For Student Only ----------------
  {
    path: "student",
    element: <StudentRoute />,
    children: [
      // ------------ Student's private routes ----------------
      {
        path: "/student",
        element: <PrivateRoute />,
        children: [
          {
            index: true,
            element: <Screen1 />,
          },
        ],
      },
      // ------------ Student's protected routes ----------------
      {
        path: "auth",
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <Screen1 />,
          },
          {
            path: "*",
            element: <Navigate to="/404_not_found" />,
          },
        ],
      },
      {
        path: "*",
        element: <Navigate to="/404_not_found" />,
      },
    ],
  },
  // ------------ Not Found Route ----------------
  {
    path: "404_not_found",
    element: <NotFound />,
  },
];

export default routes;
