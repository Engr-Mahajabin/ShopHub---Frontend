import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/axios";

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info) => {
    // console.log("Admin Login Info:", info);
    try {
      const { data } = await api.post("/admin-login", info, {
        withCredentials: true,
      });
      console.log("Admin Login Response:", data);
    } catch (error) {
      console.error("Admin Login Error:", error.response.data);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    userInfo: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.userInfo = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
