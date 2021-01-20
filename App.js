import React from 'react';
import PlacesNavigator from "./navigation/PlacesNavigator"
import {Provider} from "react-redux"
import store from "./store/store"
import {initdb} from "./helper/initdb"

initdb().then((result)=>{
  console.log("database initialized")
  console.log(result)
}).catch(err=>{
  console.log("initialization failed")
  console.log(err)
})

export default function App() {
  return (
      <Provider store={store}>
        <PlacesNavigator />
      </Provider>
      
  );
}
