import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { Task } from '../../types';

interface toDoListState {
  tasks: Task[];
  isLoading: boolean;
  error: boolean;
}

export const initialState: toDoListState = {
  tasks: [],
  isLoading: false,
  error: false,
};

export const fetchToDoList = createAsyncThunk('toDoList/fetch', async () => {
  const { data: list } = await axiosApi.get<Task[]>('/toDoList.json');
  return list || null;
});

export const EditTask = createAsyncThunk(
    'toDoList/edit',
    async (task: Task) => {
      const updated = { task: task.task, done: task.done };
      await axiosApi.put(`toDoList/${task.id}.json`, updated);
    },
);

export const DeleteTask = createAsyncThunk(
    'toDoList/delete',
    async (task: Task) => {
      await axiosApi.delete(`toDoList/${task}.json`);
    },
);

export const ToDoListSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchToDoList.pending, (state: toDoListState) => {
          state.isLoading = true;
          state.error = false;
        })
        .addCase(fetchToDoList.fulfilled, (state: toDoListState, action) => {
          const allTasks: Task[] = [];

          if (action.payload) {
            for (const [key, value] of Object.entries(action.payload)) {
              allTasks.push({
                id: key,
                task: value.task,
                done: value.done,
              });
            }
          }

          state.tasks = allTasks;
          state.isLoading = false;
        })
        .addCase(fetchToDoList.rejected, (state: toDoListState) => {
          state.isLoading = false;
          state.error = true;
        });
  },
});

export type { toDoListState };
export const ToDoListReducer = ToDoListSlice.reducer;