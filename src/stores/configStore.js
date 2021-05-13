import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./reducer/root.reducers";
import thunk from "redux-thunk"; // no changes here 😀

// export const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// setup page Github 1.2 Advanced store setup 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
