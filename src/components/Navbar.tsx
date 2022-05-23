import Container from "./Container";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full py-3 bg-primary-500">
      <Container className="flex items-center justify-between">
        <Link
          to="/student/auth"
          className="text-light-500 hover:text-neutral-50 flex items-center "
        >
          <Icon icon={"arcticons:quizlet"} fontSize={35} />
          <span className="tracking-widest font-thin ml-[0.1rem] md:block hidden">
            {" "}
            uizzer
          </span>
        </Link>
        {/* <div className="flex items-center gap-3">
          <Link to="/" className="btn btn-light">
            Login
          </Link>
          <Link to="/" className="btn btn-stroked">
            Register
          </Link>
        </div> */}
      </Container>
    </nav>
  );
};

export default Navbar;
