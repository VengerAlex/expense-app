import { createSlice } from "@reduxjs/toolkit";

import { IUserInitialState } from "./user.interface";

const initialState: IUserInitialState = {
  user: null,
  isLoading: false,
  errorSignIn: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
