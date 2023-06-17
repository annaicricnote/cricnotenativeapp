


import React, { useState } from 'react';
import Frontpage from './src/index'
import Header from './src/Headercomponent'
import { ScrollView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Pages/Homescreen";
import AboutScreen from "./src/Pages/Aboutscreen";
 import Headercomponent from './src/Headercomponent'

const Stack = createNativeStackNavigator();

function App(): JSX.Element {


  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="header" component={Headercomponent} />
        <Stack.Screen name="front" component={Frontpage} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
