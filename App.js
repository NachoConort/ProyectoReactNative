import React from 'react';
import { View } from 'react-native';
import Register from './src/components/views/Register';
import Login from './src/components/views/Login';
import Home from './src/components/views/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
// IMPORTAR COMPONENTES

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name='Register'
        component={Register}
        options={{headerShown: false}} />
        <Stack.Screen 
        name='Login'
        component={Login}
        options={{headerShown: false}} />
        <Stack.Screen 
        name='Home'
        component={Home}
        options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
