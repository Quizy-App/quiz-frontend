import CustomButton from "../../CustomButton";
import CustomInput from "../../CustomInput";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { TeacherRegister } from "../../../types";
import { registerTeacherRequest } from "../../../fetchers/teacher";
import { useDispatch } from "react-redux";
import { useMutation } from "react-query";
import { storeTeacher } from "../../../features/teacherSlice";
import { storeToken } from "../../../features/userSlice";

const TeacherSignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [teacher, setTeacher] = useState<
    TeacherRegister & {
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
    confirmPwd: "",
  });

  // Register teacher
  const { mutate: registerMutate } = useMutation(registerTeacherRequest, {
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

  // Function to handle details
  const handleDetails = (name: string, value: any) => {
    setTeacher({
      ...teacher,
      [name]: value,
    });
  };

  // Function to register teacher
  const onRegisterTeacher = () => {
    if (teacher.password !== teacher.confirmPwd) {
      return console.log("Password not matched");
    }
    const newTeacher = { ...teacher };
    newTeacher.name = `${teacher.firstName} ${teacher.lastName}`;
    delete newTeacher.firstName;
    delete newTeacher.lastName;
    delete newTeacher.confirmPwd;
    // console.log(newTeacher);
    registerMutate(newTeacher);
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
        <CustomInput
          label="First Name"
          value={teacher.firstName}
          onChange={(e) => handleDetails("firstName", e.currentTarget.value)}
        />
        <CustomInput
          label="Last Name"
          value={teacher.lastName}
          onChange={(e) => handleDetails("lastName", e.currentTarget.value)}
        />
        <CustomInput
          type="email"
          label="Email"
          value={teacher.email}
          onChange={(e) => handleDetails("email", e.currentTarget.value)}
        />
        <CustomInput
          type="password"
          label="Password"
          value={teacher.password}
          onChange={(e) => handleDetails("password", e.currentTarget.value)}
        />
        <CustomInput
          type="password"
          label="Confirm Password"
          value={teacher.confirmPwd}
          onChange={(e) => handleDetails("confirmPwd", e.currentTarget.value)}
        />
        <CustomButton
          buttonLabel="Sign Up"
          classNames="sm:col-span-2"
          onClick={onRegisterTeacher}
        />
      </section>
      <p className="text-gray-500 ">
        Already have an account?{" "}
        <Link
          to="/teacher/auth"
          className="text-blue-400 cursor-pointer font-medium"
        >
          Login
        </Link>
      </p>
    </main>
  );
};

export default TeacherSignUp;
