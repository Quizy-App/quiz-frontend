import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import studentReducer from "./features/studentSlice";
import teacherReducer from "./features/teacherSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    student: studentReducer,
    teacher: teacherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
