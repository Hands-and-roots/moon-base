// authSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      // ... update state with user data
    },
    logout: (state) => {
      // ... clear state
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;