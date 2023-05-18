import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "testing",
  initialState: {
    someKey: "",
  },
  reducers: (create) => ({
    preparedReducer: create.preparedReducer(
      (input: string) => {
        return { payload: { input } };
      },
      (state, action) => {
        state.someKey = action.payload.input;
      }
    ),
  }),
});
