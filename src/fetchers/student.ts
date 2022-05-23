import axios from "axios";
import { StudentRegister, UserLogin } from "../types";
import apiUrl from "../utils/apiUrl";

// Function to register a student
export const registerStudentRequest = async (data: StudentRegister) => {
  try {
    const res = await axios.post(`${apiUrl}/student/register`, data);
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      throw err.response;
    }
  }
};

// Function to login a student
export const loginStudentRequest = async (data: UserLogin) => {
  try {
    const res = await axios.post(`${apiUrl}/student/login`, data);
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      throw err.response;
    }
  }
};
