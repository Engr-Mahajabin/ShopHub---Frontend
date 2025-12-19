import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info) => {
    console.log("Admin Login Info:", info);
    // try{
    //     const {data}= await axios.post('/admin-login',info,
    //         {withCredentials:true});
    //         console.log("Admin Login Response:", data);
    // }catch(error){

    // }
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
export default authSlice.reducer; // ✅ singular 'reducer'
