import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/stateHooks";
import Container from "../Container";
import Navbar from "../Navbar";

const StudentRoute = () => {
  const { userType } = useAppSelector((state) => state.user);

  return (
    <>
      {userType === "teacher" ? (
        <Navigate to="/teacher" />
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

export default StudentRoute;
