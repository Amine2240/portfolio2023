import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: -1 ,
};

export const navbarindexslice = createSlice({
  name: "navbarindex",
  initialState,
  reducers: {
    setnavbarindex: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setnavbarindex } = navbarindexslice.actions;
export default navbarindexslice.reducer;