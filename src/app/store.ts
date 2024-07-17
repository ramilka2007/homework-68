import { configureStore } from '@reduxjs/toolkit';
import { ToDoListReducer } from '../containers/ToDoList/toDoListSlice';

export const store = configureStore({
  reducer: {
    toDoList: ToDoListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
