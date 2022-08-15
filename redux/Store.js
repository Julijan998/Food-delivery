import { createStore } from "redux";
import {useSyncExternalStore} from 'react';

import reducer from "./reducers/IndexR";

export default function Store(initialState) {
  const store = createStore(reducer, initialState);
  return store;
}