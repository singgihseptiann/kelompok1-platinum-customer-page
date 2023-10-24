import { combineReducers, configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./auth";

const reducers = combineReducers({
  auth: AuthReducer,
});

const store = configureStore({
  reducer: reducers,
});

export { store };
