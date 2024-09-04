import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';
import MainNavigation from './src/navigation/Navigation';
import SignUp from './src/screens/Login/SignUp';

const App = () => {
  //   messaging().onMessage(async remoteMessage => {
  //     const {notification} = remoteMessage;
  //     console.log("this is notificartion", notification)
  //     PushNotification.localNotification({
  //       channelId: 'myAPP',
  //       message: 'Hello' ,
  //       title: 'gkjashfkjshdgjfrrjfs',
  //       playSound: true,
  //       soundName: "default",
  //       });

  //   })

  //   messaging().setBackgroundMessageHandler(async remoteMessage => {
  //     // console.log('Message handled in the background!', remoteMessage);
  //     console.log('Message handled in the background!', remoteMessage);
  //        })

  //   async function requestUserPermission() {
  //     const authStatus = await messaging().requestPermission();
  //     const enabled =
  //       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //       authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //     if (enabled) {
  //       console.log('Authorization status:', authStatus);
  //     }
  //   }
  //   const getToken =async() => {

  //     const token = await messaging().getToken()
  //     console.log("Token =", token)
  //   }
  //    useEffect(() => {
  //     requestUserPermission()
  //     getToken()

  //    }, [])

  return (
    <View style={{flex: 1}}>
      <SignUp />
      {/* <MainNavigation/>
    <Text>Test</Text> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
