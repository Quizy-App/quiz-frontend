import Container from "./Container";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/stateHooks";
import { flushStudentProfile } from "../features/studentSlice";
import { flushTeacherProfile } from "../features/teacherSlice";
import { logoutUser } from "../features/userSlice";

const Navbar = () => {
  // const {} = useAppSelector(state => state.user)
  const { accessToken, userType, profile } = useAppSelector(
    (state) => state.user
  );
  const dispatch = useAppDispatch();

  // Function to logout user
  const onLogout = () => {
    userType === "student"
      ? dispatch(flushStudentProfile())
      : dispatch(flushTeacherProfile());
    dispatch(logoutUser());
  };
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
        {accessToken && (
          <div className="w-full flex justify-end items-center gap-3">
            <div className=" text-white font-semibold tracking-widest flex gap-3 items-center">
              <span className="sm:text-xl  ">Welcome</span>
              <span className="capitalize border-b-blue-100 border-b-[1.6px] text-sm sm:text-base ">
                {profile?.name}
              </span>
            </div>
            <button
              onClick={onLogout}
              className="btn btn-stroked flex items-center gap-2"
            >
              <Icon icon="prime:sign-out" fontSize={22} />
              <span className="tracking-widest text-sm font-bold"> Logout</span>
            </button>
          </div>
        )}
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
