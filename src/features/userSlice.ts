import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  userType: "teacher" | "student" | null;
  authToken: string | null;
}

const storedUserType = localStorage.getItem("user-type") as
  | "teacher"
  | "student";
const storedAuthToken = localStorage.getItem("auth-token") as string;

const initialState: UserState = {
  userType: storedUserType,
  authToken: storedAuthToken,
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
    // storeToken: (state, action: PayloadAction<UserCredential>) => {
    //   state.authToken = action.payload.authToken;
    //   state.userId = action.payload.userId;
    //   state.onboardingStage = action.payload.onboardingStage;
    //   localStorage.setItem("auth-token", state.authToken);
    //   localStorage.setItem("user-id", state.userId.toString());
    // },
    logoutUser: (state) => {
      state.authToken = null;
      localStorage.removeItem("auth-token");
    },
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
