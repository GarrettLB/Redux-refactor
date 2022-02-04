import React from "react";
import store from './store'
import { Provider } from 'react-redux';

export default function StoreProvider ({ value = [], ...props }) {
  return <Provider store={store} {...props} />;
};
