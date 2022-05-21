import React from "react";
import CustomButton from "../../CustomButton";
import CustomInput from "../../CustomInput";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
const StudentLogin = () => {
  const navigate = useNavigate();

  const inputLabel = [
    {
      labelName: "Email",
    },

    {
      labelName: "Password",
    },
  ];
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

          <h2 className="text-2xl text-primary-400 ">Login</h2>
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
        <a
          className="text-blue-400 cursor-pointer text-sm font-medium"
          href="/student/auth/sign_up"
        >
          SignUp
        </a>
      </p>
    </main>
  );
};

export default StudentLogin;
