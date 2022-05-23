import CustomButton from "../../CustomButton";
import CustomInput from "../../CustomInput";
// import { userM } from 'react-query'
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { StudentRegister } from "../../../types";
import { useState } from "react";
import { useMutation } from "react-query";
import { registerStudentRequest } from "../../../fetchers/student";

const StudentSignUp = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState<
    StudentRegister & {
      firstName?: string;
      lastName?: string;
      confirmPwd?: string;
    }
  >({
    firstName: "",
    lastName: "",
    email: "",
    name: "",
    password: "",
    enrollmentNo: "",
    branch: "CSE",
    year: 0,
    confirmPwd: "",
  });

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
      labelName: "Year",
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

  // Register student
  const { mutate: registerMutate } = useMutation(registerStudentRequest, {
    onSuccess: (data) => console.log(data),
    onError: (err) => console.log(err),
  });

  // Function to handle details
  const handleDetails = (name: string, value: any) => {
    setStudent({
      ...student,
      [name]: value,
    });
  };

  // Function to register student
  const onRegisterStudent = () => {
    if (student.password !== student.confirmPwd) {
      return console.log("Password not matched");
    }
    const newStudent = { ...student };
    newStudent.name = `${student.firstName} ${student.lastName}`;
    delete newStudent.firstName;
    delete newStudent.lastName;
    delete newStudent.confirmPwd;

    registerMutate(newStudent);
  };
  return (
    <main className="max-w-4xl flex flex-col justify-center w-full mx-auto items-center min-h-[85vh]">
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

        <h2 className="text-2xl text-primary-400 ">SignUp</h2>
      </div>
      <section className=" grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {/* {inputLabel.map((label, i) => ( */}
        <CustomInput
          label="First Name"
          value={student.firstName}
          onChange={(e) => handleDetails("firstName", e.currentTarget.value)}
        />
        <CustomInput
          label="Last Name"
          value={student.lastName}
          onChange={(e) => handleDetails("lastName", e.currentTarget.value)}
        />
        <CustomInput
          label="Enrollment No."
          value={student.enrollmentNo}
          onChange={(e) => handleDetails("enrollmentNo", e.currentTarget.value)}
        />
        <CustomInput
          label="Year"
          type="number"
          value={student.year}
          onChange={(e) => handleDetails("year", e.currentTarget.value)}
        />
        <CustomInput
          type="email"
          label="Email"
          value={student.email}
          onChange={(e) => handleDetails("email", e.currentTarget.value)}
        />
        <CustomInput
          type="password"
          label="Password"
          value={student.password}
          onChange={(e) => handleDetails("password", e.currentTarget.value)}
        />
        <CustomInput
          type="password"
          label="Confirm Password"
          value={student.confirmPwd}
          onChange={(e) => handleDetails("confirmPwd", e.currentTarget.value)}
        />
        {/* ))} */}
        <CustomButton
          buttonLabel="Sign Up"
          classNames="sm:col-span-2"
          onClick={onRegisterStudent}
          // onClick={() => navigate("/student/auth/courses")}
        />
      </section>
      <p className="text-gray-500 ">
        Already have an account?{" "}
        <Link
          to="/student/auth"
          className="text-blue-400 cursor-pointer font-medium"
        >
          Login
        </Link>
      </p>
    </main>
  );
};

export default StudentSignUp;
