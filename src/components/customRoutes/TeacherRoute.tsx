import { Outlet } from "react-router-dom";

const TeacherRoute = () => {
  return (
    <>
      <h1>Teacher Route</h1>
      <Outlet />
    </>
  );
};

export default TeacherRoute;
