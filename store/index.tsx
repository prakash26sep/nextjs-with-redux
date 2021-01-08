// import { composeWithDevTools } from "redux-devtools-extension";
import RootReducers from "../reducers/index";

// const middleware = [thunk];

// export const makeStore: any = (context: Context) =>
// createStore(RootReducers, applyMiddleware(thunk));
// export const wrapper = createWrapper(makeStore, { debug: true });

import { createStore, applyMiddleware } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const middleware = [thunk];

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = { ...state, ...action.payload };
    return nextState;
  } else return RootReducers(state, action);
};

export const store = () => {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
};

export const wrapper = createWrapper(store);
