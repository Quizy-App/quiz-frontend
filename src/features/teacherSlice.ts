import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Teacher } from "../types";

export interface UserState {
  profile: Teacher | null;
  subjectId: string;
}
const subject_id =
  localStorage.subject_id && localStorage.getItem("subject_id");

const initialState: UserState = {
  profile: null,
  subjectId: subject_id,
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
    setSubjectId(state, action: PayloadAction<{ subjectId: string }>) {
      state.subjectId = action.payload.subjectId;
      localStorage.setItem("subject_id", action.payload.subjectId);
    },
  },
});

export const { flushTeacherProfile, storeTeacher, setSubjectId } =
  teacherSlice.actions;

export default teacherSlice.reducer;
