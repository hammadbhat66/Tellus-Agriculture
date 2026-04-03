/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Provider } from "react-redux";

import {persistor, store} from './store/store';
import { PersistGate } from "redux-persist/integration/react";
import Router from "./src/router/router";
import { NavigationContainer } from "@react-navigation/native";

function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}





export default App;
