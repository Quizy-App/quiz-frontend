import CustomButton from "../../CustomButton";
import CustomInput from "../../CustomInput";
// import { userM } from 'react-query'
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { StudentRegister } from "../../../types";
import { useState } from "react";
import { useMutation } from "react-query";
import { registerStudentRequest } from "../../../fetchers/student";
import { useAppDispatch } from "../../../hooks/stateHooks";
import { storeStudent } from "../../../features/studentSlice";
import { storeToken } from "../../../features/userSlice";

const StudentSignUp = () => {
  const dispatch = useAppDispatch();
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

  // Register student
  const { mutate: registerMutate } = useMutation(registerStudentRequest, {
    onSuccess: (data) => {
      dispatch(storeToken(data?.accessToken));
      dispatch(
        storeStudent({
          profile: data?.student,
        })
      );
    },
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
    <main className="max-w-xl flex flex-col justify-center w-full mx-auto items-center min-h-[85vh]">
      <div className="flex gap-2 items-center justify-center py-4">
        <h2 className="text-4xl font-bold text-primary-400 ">SignUp</h2>
      </div>
      <section className=" grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {/* {inputLabel.map((label, i) => ( */}
        <CustomInput
          placeholder="Enter your first name"
          label="First Name"
          parentClass="col-span-2 sm:col-span-1"
          value={student.firstName}
          onChange={(e) => handleDetails("firstName", e.currentTarget.value)}
        />
        <CustomInput
          placeholder="Enter your last name"
          parentClass="col-span-2 sm:col-span-1"
          label="Last Name"
          value={student.lastName}
          onChange={(e) => handleDetails("lastName", e.currentTarget.value)}
        />
        <CustomInput
          placeholder="Enter your enrollment no"
          parentClass="col-span-2 sm:col-span-1"
          label="Enrollment No."
          value={student.enrollmentNo}
          onChange={(e) => handleDetails("enrollmentNo", e.currentTarget.value)}
        />
        <CustomInput
          placeholder="Enter your year"
          parentClass="col-span-2 sm:col-span-1"
          label="Year"
          type="number"
          min={1}
          value={student.year}
          onChange={(e) => handleDetails("year", e.currentTarget.value)}
        />
        <CustomInput
          placeholder="Enter your email"
          parentClass="col-span-2 "
          type="email"
          label="Email"
          value={student.email}
          onChange={(e) => handleDetails("email", e.currentTarget.value)}
        />
        <CustomInput
          placeholder="Enter your password"
          parentClass="col-span-2 sm:col-span-1"
          type="password"
          label="Password"
          value={student.password}
          onChange={(e) => handleDetails("password", e.currentTarget.value)}
        />
        <CustomInput
          placeholder="Enter your confirm password"
          parentClass="col-span-2 sm:col-span-1"
          type="password"
          label="Confirm Password"
          value={student.confirmPwd}
          onChange={(e) => handleDetails("confirmPwd", e.currentTarget.value)}
        />

        <CustomButton
          disabled={
            student.password.length < 5 ||
            !student.confirmPwd ||
            !student.email ||
            !student.firstName ||
            !student.lastName
          }
          buttonLabel="Sign Up"
          classNames="col-span-2 "
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
