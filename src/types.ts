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
