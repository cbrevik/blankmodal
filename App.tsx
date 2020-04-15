import 'react-native-gesture-handler';
import React from 'react';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, DetailsScreen} from './Screens';

enableScreens();

const RootStack = createStackNavigator();
const NestedStack = createStackNavigator();
const ModalStack = createStackNavigator();

const NestedScreen = () => (
  <NestedStack.Navigator>
    <NestedStack.Screen name="Home" component={HomeScreen} />
  </NestedStack.Navigator>
);

const ModalScreen = () => (
  <ModalStack.Navigator screenOptions={{headerShown: false}}>
    <ModalStack.Screen name="Details" component={DetailsScreen} />
  </ModalStack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Nested" mode="modal">
        <RootStack.Screen
          name="Nested"
          component={NestedScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen name="Modal" component={ModalScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
