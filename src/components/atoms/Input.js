import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const Input = (bw,br,bc,ph) => {
  return (
    <View>
      <TextInput
      placeholder={ph}
      style={{borderWidth:bw,
        borderRadius:br,
        borderColor:bc,
        
      }}/>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({})