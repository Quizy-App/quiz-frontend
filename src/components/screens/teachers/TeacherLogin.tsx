import CustomButton from "../../CustomButton";
import CustomInput from "../../CustomInput";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { makeStudent, storeToken } from "../../../features/userSlice";
import { useAppDispatch } from "../../../hooks/stateHooks";
import { useState } from "react";
import { UserLogin } from "../../../types";
import { loginTeacherRequest } from "../../../fetchers/teacher";
import { storeTeacher } from "../../../features/teacherSlice";
import { useMutation } from "react-query";

const TeacherLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loginDetails, setLogin] = useState<UserLogin>({
    email: "",
    password: "",
  });

  const { mutate: loginMutate } = useMutation(loginTeacherRequest, {
    onSuccess: (data) => {
      dispatch(storeToken(data?.accessToken));
      dispatch(
        storeTeacher({
          profile: data?.teacher,
        })
      );
    },
    onError: (err) => console.log(err),
  });

  // Function to login as student
  const onLoginStudent = () => {
    dispatch(makeStudent());
    navigate("/student/auth");
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
    <main className="max-w-4xl flex flex-col justify-center w-full mx-auto items-center min-h-[90vh]">
      <section className="   sm:w-[60%] w-full">
        <div className="flex gap-2 items-center justify-center py-4">
          <h2 className="text-4xl font-bold text-primary-400 ">Login</h2>
        </div>

        <CustomInput
          placeholder="Enter your email"
          type="email"
          label="Email"
          value={loginDetails.email}
          onChange={(e) => handleDetails("email", e.currentTarget.value)}
        />
        <CustomInput
          placeholder="Enter your password"
          type="password"
          label="Password"
          value={loginDetails.password}
          onChange={(e) => handleDetails("password", e.currentTarget.value)}
        />
        <CustomButton
          classNames="mt-3"
          buttonLabel="Login"
          onClick={onLogin}
          disabled={!loginDetails.email || !loginDetails.password}
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
