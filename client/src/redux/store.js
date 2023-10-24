import { configureStore } from "@reduxjs/toolkit";
import hoverReducer from "./hoverslice";
import indexReducer from "./navbarindex";

export const store = configureStore({
  reducer: {
    hoverbooleen: hoverReducer,
    navbarindex: indexReducer,
  },
});
