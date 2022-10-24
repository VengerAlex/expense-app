import { IDashboardInitialState } from "./dashboard.interface";
import { LOADING_STATUS } from "../../../utils/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../index";

const initialState: IDashboardInitialState = {
  loading: LOADING_STATUS.IDLE,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
});

export const dashboardSelector = (state: RootState) => state.dashboard;

export default dashboardSlice.reducer;
