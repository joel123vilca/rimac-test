import { createReducer } from "@reduxjs/toolkit";

import * as userActions from "../actions/UserActions";

const initialState = {
  user: {},
};

const UserReducer = createReducer(initialState, (builder) => {
  builder.addCase(userActions.setUser, (state, { payload }) => ({
    ...state,
    user: payload,
  }));
});

export default UserReducer;
