import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "../features/theme/theme-slice";
import todosReducer from "../features/todos/todos-slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    todos: todosReducer,
  },
});
