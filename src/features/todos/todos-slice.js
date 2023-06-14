import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.value = [...state.value, action.payload];
    },
    toggleComplete(state, action) {
      state.value = action.payload;
    },
    deleteTodo(state, action) {
      state.value = action.payload;
    },
    clearComplete(state, action) {
      state.value = action.payload;
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo, clearComplete } =
  todosSlice.actions;
export default todosSlice.reducer;
