import React from 'react';
import PlacesNavigator from "./navigation/PlacesNavigator"
import {Provider} from "react-redux"
import store from "./store/store"

export default function App() {
  return (
      <Provider store={store}>
        <PlacesNavigator />
      </Provider>
      
  );
}
