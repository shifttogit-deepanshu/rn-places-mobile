import React from 'react';
import PlacesNavigator from "./navigation/PlacesNavigator"
import {Provider} from "react-redux"
import store from "./store/store"
import {fetchplaces, initdb} from "./helper/initdb"


initdb().then(()=>{
  console.log("database initialized")
}).catch(err=>{
  console.log("initialization failed" + err)
})

export default function App() {
  return (
      <Provider store={store}>
        <PlacesNavigator />
      </Provider>
      
  );
}