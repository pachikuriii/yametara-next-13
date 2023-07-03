import { combineReducers } from "redux";

const counterReducer = (state = 1, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  count: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
