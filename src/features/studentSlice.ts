import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Student } from "../types";

export interface UserState {
  profile: Student | null;
}

const initialState: UserState = {
  profile: null,
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    storeStudent: (state, action: PayloadAction<{ profile: Student }>) => {
      state.profile = action.payload.profile;
    },
    flushStudentProfile: (state) => {
      state.profile = null;
    },
  },
});

export const { storeStudent, flushStudentProfile } = studentSlice.actions;

export default studentSlice.reducer;
