import CustomButton from "../../CustomButton";
import CustomInput from "../../CustomInput";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { makeStudent } from "../../../features/userSlice";
import { useAppDispatch } from "../../../hooks/stateHooks";
const TeacherLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const inputLabel = [
    {
      labelName: "Email",
    },

    {
      labelName: "Password",
    },
  ];

  // Function to login as student
  const onLoginStudent = () => {
    dispatch(makeStudent());
    navigate("/student/auth");
  };

  return (
    <main className="max-w-4xl flex flex-col justify-center w-full mx-auto items-center min-h-[85vh]">
      <section className="   sm:w-[60%] w-full">
        <div className="flex gap-2 items-center justify-center py-4">
          <div className="flex items-center">
            <Icon
              icon={"arcticons:quizlet"}
              className="text-blue-400"
              fontSize={45}
            />
            <span className="tracking-widest text-2xl text-blue-400 ml-[0.1rem] md:block hidden">
              {" "}
              uizzer
            </span>
          </div>

          <h2 className="text-2xl text-primary-400 ">Teacher Login</h2>
        </div>

        {inputLabel.map((label, i) => (
          <CustomInput key={i} label={label.labelName} />
        ))}
        <CustomButton
          buttonLabel="Login"
          onClick={() => navigate("/student/auth/courses")}
        />
      </section>
      <p className="text-gray-500 ">
        Don't have an account?{" "}
        <Link
          to="/teacher/auth/sign_up"
          className="text-blue-400 cursor-pointer text-sm font-medium"
        >
          SignUp
        </Link>
      </p>
      <br />
      <p className="text-gray-500 ">
        Not a Teacher?{" "}
        <button
          onClick={onLoginStudent}
          className="text-blue-400 cursor-pointer font-medium"
        >
          Student Login
        </button>
      </p>
    </main>
  );
};

export default TeacherLogin;
