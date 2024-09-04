import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

const Settings = () => {
  handleViewRef = ref => (this.view = ref);

  bounce = () =>
    this.view.bounce(800).then(endState =>
      console.log(endState.finished ? 'bounce finished' : 'bounce cancelled')
    );

  return (
    <TouchableWithoutFeedback onPress={this.bounce}>
      <Animatable.View ref={this.handleViewRef}>
        <Text>Bounce me!</Text>
      </Animatable.View>
    </TouchableWithoutFeedback>
  );
};

export default Settings;
