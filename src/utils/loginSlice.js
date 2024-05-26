import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    // Action to clear form fields
    clearFormFields: (state) => {
      state.email = "";
      state.password = "";
    },
    // Action to update email field
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    // Action to update password field
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { clearFormFields, updateEmail, updatePassword } = loginSlice.actions;

export default loginSlice.reducer;
