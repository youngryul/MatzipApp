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
import {QueryClientProvider} from "@tanstack/react-query";
import queryClient from "./src/api/queryClient";


function App() {
  
  return (
      /** react query를 사용하기 위해 감싸주어야 한다. (QueryClientProvider) */
      <QueryClientProvider client={queryClient}>
          <NavigationContainer>
              <RootNavigator/>
          </NavigationContainer>
      </QueryClientProvider>
  );
}

export default App;
