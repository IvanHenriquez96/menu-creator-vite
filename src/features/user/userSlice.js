import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // value: 0,
  isLogged: JSON.parse(localStorage.getItem("auth_isLogged")) || false,
  token: JSON.parse(localStorage.getItem("auth_token")) || "",
  email: JSON.parse(localStorage.getItem("auth_email")) || "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogged = true;
    },
    logout: (state) => {
      state.isLogged = false;
      localStorage.removeItem("auth_isLogged");
      localStorage.removeItem("auth_token");
      localStorage.removeItem("auth_email");
    },
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = userSlice.actions;
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
