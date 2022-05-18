import { Outlet } from "react-router-dom";

const StudentRoute = () => {
  return (
    <>
      <h1>Student Route</h1>
      <Outlet />
    </>
  );
};

export default StudentRoute;
