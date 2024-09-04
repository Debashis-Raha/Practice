import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Button = prop => {
  const {border, margin, h, w, color, backColor, name, onClick} = prop;
  return (
    <View>
      <TouchableOpacity
        onPress={() => onClick()}
        style={{
          height: h,
          width: w,
          backgroundColor: backColor,
          borderRadius: border,
          alignSelf: 'center',
          marginTop: margin,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: color}}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
    
});
