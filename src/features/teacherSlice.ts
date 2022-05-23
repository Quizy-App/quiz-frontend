import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Teacher } from "../types";

export interface UserState {
  profile: Teacher | null;
}

const initialState: UserState = {
  profile: null,
};

const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    storeTeacher: (state, action: PayloadAction<{ profile: Teacher }>) => {
      state.profile = action.payload.profile;
    },
    flushTeacherProfile: (state) => {
      state.profile = null;
    },
  },
});

export const { flushTeacherProfile, storeTeacher } = teacherSlice.actions;

export default teacherSlice.reducer;
