import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Student } from "../types";

export interface UserState {
  accessToken: string | null;
  profile: Student | null;
}

const storedAccessToken = localStorage.getItem("access-token") as string;

const initialState: UserState = {
  accessToken: storedAccessToken,
  profile: null,
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    storeStudent: (
      state,
      action: PayloadAction<{ accessToken: string; profile: Student }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.profile = action.payload.profile;
      localStorage.setItem("access-token", state.accessToken);
    },
    logoutUser: (state) => {
      state.profile = null;
      state.accessToken = null;
      localStorage.removeItem("access-token");
    },
  },
});

export const { logoutUser, storeStudent } = studentSlice.actions;

export default studentSlice.reducer;
