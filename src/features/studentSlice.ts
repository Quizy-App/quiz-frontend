import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Student } from "../types";

export interface UserState {
  profile: Student | null;
  subjectId: string;
}

const initialState: UserState = {
  profile: null,
  subjectId: "",
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

    storeSubjectId: (state, action: PayloadAction<{ subjectId: string }>) => {
      state.subjectId = action.payload.subjectId;
    },
  },
});

export const { storeStudent, flushStudentProfile, storeSubjectId } =
  studentSlice.actions;

export default studentSlice.reducer;
