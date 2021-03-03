import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { DetailUserScreen, CreateUserScreen, ListUserScreen} from './src/screens'

const Stack = createStackNavigator();

const  App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='List-user'>
        <Stack.Screen name="Detail-user" component={DetailUserScreen} />
        <Stack.Screen name="Create-user" component={CreateUserScreen} />
        <Stack.Screen name="List-user" component={ListUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
