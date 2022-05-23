import CustomButton from "../../CustomButton";
import CustomInput from "../../CustomInput";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/stateHooks";
import { makeTeacher, storeToken } from "../../../features/userSlice";
import { UserLogin } from "../../../types";
import { useState } from "react";
import { useMutation } from "react-query";
import { loginStudentRequest } from "../../../fetchers/student";
import { storeStudent } from "../../../features/studentSlice";

const StudentLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loginDetails, setLogin] = useState<UserLogin>({
    email: "",
    password: "",
  });

  const { mutate: loginMutate } = useMutation(loginStudentRequest, {
    onSuccess: (data) => {
      if (data?.accessToken) {
        // console.log(data?.accessToken);
        dispatch(storeToken(data?.accessToken));
        dispatch(
          storeStudent({
            profile: data?.student,
          })
        );
      }
    },
    onError: (err) => console.log(err),
  });

  // Function to login as teacher
  const onLoginTeacher = () => {
    dispatch(makeTeacher());
    navigate("/teacher/auth");
  };

  // Function to handle login details
  const handleDetails = (name: string, value: any) => {
    setLogin({
      ...loginDetails,
      [name]: value,
    });
  };

  // Function to login a student
  const onLogin = () => {
    if (loginDetails.email !== "" && loginDetails.password !== "") {
      loginMutate(loginDetails);
    }
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

          <h2 className="text-2xl text-primary-400 ">Student Login</h2>
        </div>

        {/* {inputLabel.map((label, i) => ( */}
        <CustomInput
          type="email"
          label="Email"
          value={loginDetails.email}
          onChange={(e) => handleDetails("email", e.currentTarget.value)}
        />
        <CustomInput
          type="password"
          label="Password"
          value={loginDetails.password}
          onChange={(e) => handleDetails("password", e.currentTarget.value)}
        />
        {/* ))} */}
        <CustomButton buttonLabel="Login" onClick={onLogin} />
      </section>
      <p className="text-gray-500 ">
        Don't have an account?{" "}
        <Link
          to="/student/auth/sign_up"
          className="text-blue-400 cursor-pointer text-sm font-medium"
        >
          SignUp
        </Link>
      </p>
      <br />
      <p className="text-gray-500 ">
        Not a Student?{" "}
        <button
          onClick={onLoginTeacher}
          className="text-blue-400 cursor-pointer font-medium"
        >
          Teacher Login
        </button>
      </p>
    </main>
  );
};

export default StudentLogin;
