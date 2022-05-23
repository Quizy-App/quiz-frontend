export interface StudentRegister {
  name: string;
  email: string;
  password: string;
  enrollmentNo: string;
  branch: string;
  year: number;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface Student {
  branch: string;
  email: string;
  enrollmentNo: string;
  name: string;
  year: string;
}

export interface TeacherRegister {
  name: string;
  email: string;
  password: string;
}

export interface Teacher {
  email: string;
  name: string;
}

export interface Subject {
  _id: string;
  name: string;
  year: number;
  createdOn: string;
  __v: number;
}

export interface QuizAns {
  _id: string;
  title: string;
  isPreferred: string;
  questionId: string;
  userId: string;
  createdOn: string;
  __v: number;
}

export type SubjectType = {
  _id: string;
  name: string;
  year: number;
  createdOn: string;
  __v: number;
};
