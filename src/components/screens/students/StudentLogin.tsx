import CustomButton from "../../CustomButton";
import CustomInput from "../../CustomInput";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/stateHooks";
import { makeTeacher } from "../../../features/userSlice";
import { useState } from "react";
import { useMutation } from "react-query";
import { loginStudentRequest } from "../../../fetchers/student";

const StudentLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const inputLabel = [
    {
      labelName: "email",
    },
    {
      labelName: "password",
    },
  ];

  const [login, setlogin] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  // Function to login as teacher
  const onLoginTeacher = () => {
    dispatch(makeTeacher());
    navigate("/teacher/auth");
  };

  const handlerChange = (label: string, value: string) => {
    setlogin({
      ...login,
      [label]: value,
    });
  };

  const { mutate } = useMutation(loginStudentRequest, {
    onSuccess(data) {
      console.log(data);
      if (data) {
        navigate("/student/auth/courses");
      }
    },
  });
  const loginSubmit = () => {
    if (login.email === "" || login.password === "") {
      return;
    }
    mutate(login);
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

        {inputLabel.map((label, i) => (
          <CustomInput
            key={i}
            label={label.labelName}
            onChange={(e) =>
              handlerChange(label.labelName, e.currentTarget.value)
            }
          />
        ))}
        <CustomButton
          classNames="mt-4 mb-"
          buttonLabel="Login"
          onClick={loginSubmit}
          disabled={!login.email || login.password.length < 5}
        />
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
