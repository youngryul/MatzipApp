/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from "@react-navigation/native";

import AuthStackNavigator from "./src/navigations/stack/AuthStackNavigator";
import RootNavigator from "./src/navigations/root/RootNavigator";


function App() {
  
  return (
      <NavigationContainer>
        <RootNavigator/>
      </NavigationContainer>
  );
}

export default App;
