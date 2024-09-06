import {StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Homepage/Home'
import List from '../screens/List/List'
import Settings from '../screens/Settings/Settings'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login/Login'
import LoginRoutes from './Login-Routes'
import SignUp from '../screens/Login/SignUp'

const MainNavigation = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator();
  return (
  <NavigationContainer>
    {/* <Tab.Navigator>
        <Tab.Screen name='home' component={Home}/>
        <Tab.Screen name='list' component={List}/>
        <Tab.Screen name='settings' component={Settings}/>
    </Tab.Navigator> */}
<Stack.Navigator initialRouteName='login'>
  <Stack.Screen name ='login' component={LoginRoutes}/>
  <Stack.Screen name='home' component={Home}/>
  <Stack.Screen name='signup' component={SignUp} options={{headerShown:false}}/>
</Stack.Navigator>
    </NavigationContainer>
)};

export default MainNavigation

const styles = StyleSheet.create({})