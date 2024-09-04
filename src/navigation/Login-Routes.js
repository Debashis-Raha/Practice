import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import SignUp from '../screens/Login/SignUp';

const LoginRoutes = () => {
    const navigation = useNavigation();
    const Stack = createStackNavigator();
  return (
   <Stack.Navigator>
    <Stack.Screen name='loginScreen' component={Login} options={{headerShown:false}}/>
    <Stack.Screen name='signUp' component={SignUp} options={{headerShown:false}}/>
   </Stack.Navigator>
  )
}

export default LoginRoutes

const styles = StyleSheet.create({})