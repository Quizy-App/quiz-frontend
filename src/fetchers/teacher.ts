import axios from "axios";
import { TeacherRegister, UserLogin } from "../types";
import apiUrl from "../utils/apiUrl";

// Function to register a student
export const registerTeacherRequest = async (data: TeacherRegister) => {
  try {
    const res = await axios.post(`${apiUrl}/teacher/register`, data);
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      throw err.response;
    }
  }
};

// Function to login a student
export const loginTeacherRequest = async (data: UserLogin) => {
  try {
    const res = await axios.post(`${apiUrl}/teacher/login`, data);
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      throw err.response;
    }
  }
};
