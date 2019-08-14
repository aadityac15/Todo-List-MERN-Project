import { createStore, applyMiddleware } from "redux";
import { defaultState } from "../../server/defaultState";
import { createLogger } from "redux-logger";
import createSagaMiddleWare from "redux-saga";

const sagaMiddleWare = createSagaMiddleWare();
import * as sagas from './sagas.mock';
export const store = createStore(function reducer(
  state = defaultState,
  action
) {
  return state;
},
applyMiddleware(createLogger(), sagaMiddleWare));

console.log("store is ",store.getState());

// for (let saga in sagas) {
//   sagaMiddleWare.run(saga)
// }