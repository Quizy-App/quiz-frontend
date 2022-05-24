import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ProfileType = {
  createdOn: string;
  email: string;
  name: string;
  password: string;
  __v: number;
  _id: string;
  enrollmentNo: string;
  branch: string;
  year: number;
};

export interface UserState {
  userType: "teacher" | "student" | null;
  accessToken: string | null;
  profile: ProfileType | null;
}

const storedUserType = localStorage.getItem("user-type") as
  | "teacher"
  | "student";
const storedAccessToken = localStorage.getItem("access-token") as string;

const initialState: UserState = {
  userType: storedUserType || "student",
  accessToken: storedAccessToken,
  profile: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    makeStudent: (state) => {
      state.userType = "student";
      localStorage.setItem("user-type", state.userType);
    },
    makeTeacher: (state) => {
      state.userType = "teacher";
      localStorage.setItem("user-type", state.userType);
    },
    storeToken: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.accessToken = action.payload;
      localStorage.setItem("access-token", state.accessToken);
    },
    logoutUser: (state) => {
      state.accessToken = null;
      state.profile = null;
      localStorage.removeItem("access-token");
    },
    profileSet: (state, action: PayloadAction<ProfileType>) => {
      state.profile = action.payload;
    },
  },
});

export const { logoutUser, makeStudent, makeTeacher, storeToken, profileSet } =
  userSlice.actions;

export default userSlice.reducer;
