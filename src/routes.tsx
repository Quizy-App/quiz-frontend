import { Navigate, RouteObject } from "react-router-dom";
import PrivateRoute from "./components/customRoutes/PrivateRoute";
import ProtectedRoute from "./components/customRoutes/ProtectedRoute";
import StudentRoute from "./components/customRoutes/StudentRoute";
import TeacherRoute from "./components/customRoutes/TeacherRoute";
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
        children: [],
      },
      // ------------ Teacher's protected routes ----------------
      {
        path: "auth",
        element: <ProtectedRoute />,
        children: [
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
        children: [],
      },
      // ------------ Student's protected routes ----------------
      {
        path: "auth",
        element: <ProtectedRoute />,
        children: [
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
