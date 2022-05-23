import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/stateHooks";
import Container from "../Container";
import Navbar from "../Navbar";

const TeacherRoute = () => {
  const { userType } = useAppSelector((state) => state.user);

  return (
    <>
      {userType === "student" ? (
        <Navigate to="/student" />
      ) : (
        <>
          <Navbar />
          <Container>
            <Outlet />
          </Container>
        </>
      )}
    </>
  );
};

export default TeacherRoute;
