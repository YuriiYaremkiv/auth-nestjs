import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../services/AuthServices";

class AuthActions {
  static signin = createAsyncThunk(
    "auth/signin",
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const { data } = await AuthService.signin({ email, password });
        return data;
      } catch (err) {
        return rejectWithValue(err.response.data.messag);
      }
    }
  );

  static signup = createAsyncThunk(
    "auth/signup",
    async ({ username, email, password }, { rejectWithValue }) => {
      try {
        const { data } = await AuthService.signup({
          username,
          email,
          password,
        });
        return data;
      } catch (err) {
        if (err?.response?.data?.message) {
          return rejectWithValue(err.response.data.message);
        } else {
          return rejectWithValue(
            "An error occurred with the network. Please check your connection."
          );
        }
      }
    }
  );

  static logout = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
      try {
        const { data } = await AuthService.logout();
        return data;
      } catch (err) {
        return rejectWithValue(err.response.data.messag);
      }
    }
  );

  static refresh = createAsyncThunk(
    "auth/refresh",
    async (_, { rejectWithValue }) => {
      try {
        const { data } = await AuthService.refresh();
        return data;
      } catch (err) {
        return rejectWithValue(err.response.data.messag);
      }
    }
  );
}

export default AuthActions;
