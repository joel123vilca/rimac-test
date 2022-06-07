import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const types = {
  POST_USER: "POST_USER",
  SET_USER: "SET_USER",
};

export const createPerson = createAsyncThunk(
  types.POST_USER,
  async (payload, { dispatch }) => {
    dispatch(setUser(payload));
  }
);

export const setUser = createAction(types.SET_USER, (user) => ({
  payload: user,
}));
