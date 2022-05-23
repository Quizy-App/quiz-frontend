import axios from "axios";
import apiUrl from "../utils/apiUrl";

// Function to get all subjects of students
export const studentSubjects = async (year: string) => {
  try {
    const res = await axios.get(`${apiUrl}/quiz/fetch_subjects/${year}`);
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      throw err.response;
    }
  }
};

// Function to fetch questions by subject
export const getQuestionsBySubject = async (year: string) => {
  try {
    const res = await axios.get(`${apiUrl}/quiz/fetch_questions/${year}`);
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      throw err.response;
    }
  }
};

// Function to fetch a result
export const getSubjectResult = async (subject: string) => {
  try {
    const res = await axios.get(`${apiUrl}
    /quiz/fetch_results/${subject}`);
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      throw err.response;
    }
  }
};

// Function to post subject
export const getSubjects = async (year: number) => {
  try {
    const res = await axios.get(`${apiUrl}/quiz/fetch_subjects/${year}`);
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      throw err.response;
    }
  }
};

// Function to post subject
export const getSubjectsInfo = async (subject: string) => {
  try {
    const res = await axios.get(`${apiUrl}/quiz/fetch_subject/${subject}`);
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      throw err.response;
    }
  }
};

// Function to get profile info
export const getProfileInfo = async () => {
  try {
    const res = await axios.get(`${apiUrl}/teacher/profile`);
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      throw err.response;
    }
  }
};
