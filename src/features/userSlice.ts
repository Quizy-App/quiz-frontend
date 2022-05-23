import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  userType: "teacher" | "student" | null;
  accessToken: string | null;
}

const storedUserType = localStorage.getItem("user-type") as
  | "teacher"
  | "student";
const storedAccessToken = localStorage.getItem("access-token") as string;

const initialState: UserState = {
  userType: storedUserType || "student",
  accessToken: storedAccessToken,
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
      localStorage.removeItem("auth-token");
    },
  },
});

export const { logoutUser, makeStudent, makeTeacher, storeToken } =
  userSlice.actions;

export default userSlice.reducer;
