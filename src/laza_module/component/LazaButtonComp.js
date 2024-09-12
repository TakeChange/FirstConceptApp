import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const LazaButtonComp = ({ buttonText, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.buttonStyle}
    >
      <Text style={styles.textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

export default LazaButtonComp

const styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    backgroundColor: '#9775FA',
    alignItems: 'center',
    height: 75,
    justifyContent: 'center'
  },
  textStyle: {
    fontSize:17
  }
})