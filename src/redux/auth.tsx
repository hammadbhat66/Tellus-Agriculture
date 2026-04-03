import { createSlice } from "@reduxjs/toolkit";
// import {verifyOtp} from '../api/authApi';
// import { Toast } from 'react-native-toast-message/lib/src/Toast';

interface AuthState {
  done: boolean;
  loggedIn: boolean;
  loading: boolean;
  error: string | null;
  user: any;
}

const initialState: AuthState = {
  done: false,
  loggedIn: false,
  loading: false,
  error: null,
  user: null, //save full user data here
};




export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
   
  },
});

// Action creators are generated for each case reducer function
export const {  } = auth.actions;

export default auth.reducer;
