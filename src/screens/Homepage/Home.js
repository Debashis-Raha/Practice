import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
// import Loader from './../../components/atoms/loader';

const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const navigateToDetails = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('settings');
    }, 2000); // Simulate a loading time of 2 seconds
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Text>Home Screen</Text>
          <Button title="Go to Settings" onPress={navigateToDetails} />
        </>
      )}
    </View>
  );
};

export default HomeScreen;
