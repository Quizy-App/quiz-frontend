import { Outlet } from "react-router-dom";
import Container from "../Container";
import Navbar from "../Navbar";

const StudentRoute = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default StudentRoute;
