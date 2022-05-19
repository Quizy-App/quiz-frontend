import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const TeacherRoute = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default TeacherRoute;
