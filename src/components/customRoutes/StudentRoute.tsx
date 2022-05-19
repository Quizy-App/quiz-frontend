import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const StudentRoute = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default StudentRoute;
