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
// Function to login a student
export const teacherAddYear = async (year: number) => {
  try {
    const res = await axios.post(`${apiUrl}/quiz/add_course_year`, { year });
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      throw err.response;
    }
  }
};
// Function to login a student
export const addSubject = async (data: {
  name: string;
  image?: string;
  year: number;
}) => {
  try {
    const res = await axios.post(`${apiUrl}/quiz/add_subject`, data);
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      throw err.response;
    }
  }
};
// Function to login a student
export const addQues = async (data: {
  title: string;
  marks: number;
  subjectId: string;
}) => {
  try {
    const res = await axios.post(`${apiUrl}/quiz/add_question`, data);
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      throw err.response;
    }
  }
};

// Function to login a student
export const getQuizQandA = async (subject: string, page: string) => {
  try {
    const res = await axios.get(
      `${apiUrl}/student/fetch_quiz/${subject}${page ? `?page='${page}` : ""} `
    );
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      throw err.response;
    }
  }
};
