import { Navigate, RouteObject } from "react-router-dom";
import PrivateRoute from "./components/customRoutes/PrivateRoute";
import ProtectedRoute from "./components/customRoutes/ProtectedRoute";
import StudentRoute from "./components/customRoutes/StudentRoute";
import TeacherRoute from "./components/customRoutes/TeacherRoute";
import {
  StudentCoursesView,
  StudentLogin,
  StudentQuizInstructions,
  StudentResult,
  StudentSignUp,
} from "./components/screens/students";
import StudentQuizQA from "./components/screens/students/StudentQuizQA";
import {
  TeacherAddSubject,
  TeacherLogin,
  TeacherSignUp,
} from "./components/screens/teachers";
import TeacherAddQuestions from "./components/screens/teachers/TeacherAddQuestions";
import { NotFound } from "./pages";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/student" />,
  },
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
            element: <TeacherAddSubject />,
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
            element: <TeacherLogin />,
          },
          {
            path: "sign_up",
            element: <TeacherSignUp />,
          },
          {
            path: "add_que",
            element: <TeacherAddQuestions />,
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
            element: <StudentCoursesView />,
          },
          {
            path: "instructions",
            element: <StudentQuizInstructions />,
          },
          {
            path: "quiz",
            element: <StudentQuizQA />,
          },
          {
            path: "result",
            element: <StudentResult />,
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
            element: <StudentLogin />,
          },
          {
            path: "sign_up",
            element: <StudentSignUp />,
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
