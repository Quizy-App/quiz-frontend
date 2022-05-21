import React from "react";
import CustomButton from "../../CustomButton";
import CustomInput from "../../CustomInput";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
const StudentSignUp = () => {
  const navigate = useNavigate();
  const inputLabel = [
    {
      labelName: "First Name",
    },
    {
      labelName: "Last Name",
    },
    {
      labelName: "Enrollment No",
    },
    {
      labelName: "Email",
    },
    {
      labelName: "Password",
    },
    {
      labelName: "Confirm Password",
    },
  ];
  return (
    <main className="max-w-4xl flex flex-col justify-center w-full mx-auto items-center min-h-[85vh]">
      <section className=" grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {inputLabel.map((label, i) => (
          <CustomInput key={i} label={label.labelName} />
        ))}
        <CustomButton
          buttonLabel="Submit"
          classNames="sm:col-span-2"
          onClick={() => navigate("/student/auth/courses")}
        />
      </section>
      <p className="text-gray-500 ">
        Already have an account?{" "}
        <a className="text-blue-400 cursor-pointer" href="/student/auth">
          Login
        </a>
      </p>
    </main>
  );
};

export default StudentSignUp;
