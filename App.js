import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/screens/Home';
import ProductInfo from './components/screens/ProductInfo';
import MyCart from './components/screens/MyCart';
import Login from './components/screens/Auth/Login';
import Signup from './components/screens/Auth/Signup';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './components/DrawerContent/DrawerContent';
import Profile from './components/screens/Profile/Profile';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Profile"
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="MyCart" component={MyCart} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="ProductInfo" component={ProductInfo} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Signup" component={Signup} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

// {/* <Stack.Screen name="ProductInfo" component={ProductInfo} />
// <Stack.Screen name="MyCart" component={MyCart} />
// <Stack.Screen name="Login" component={Login} />
// <Stack.Screen name="Signup" component={Signup} /> */}
