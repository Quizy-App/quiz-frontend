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
        {inputLabel.map((label, i) => (
          <CustomInput key={i} label={label.labelName} />
        ))}
        <CustomButton
          buttonLabel="Submit"
          onClick={() => navigate("/student/auth/courses")}
        />
      </section>
      <p className="text-gray-500 ">
        Don't have an account?{" "}
        <a
          className="text-blue-400 cursor-pointer text-sm"
          href="/student/auth/sign_up"
        >
          SignUp
        </a>
      </p>
    </main>
  );
};

export default StudentLogin;
