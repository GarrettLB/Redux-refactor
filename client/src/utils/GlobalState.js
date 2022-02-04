import React from "react";
import store from './store'
import { Provider } from 'react-redux';

export default function StoreProvider (props) {
  return <Provider store={store} {...props} />;
};
