import { View, Text, StyleSheet, Switch } from 'react-native'
import React from 'react'
import { ToggleButton } from 'react-native-paper'
import { header_color } from '../constant/COLOR'

const TextWithToggleComp = ({onValueChange,value,textValue}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.toggleText}>{textValue}</Text>
      <Switch
        trackColor={{false: '#767577', true: '#34C759'}}
        thumbColor={value ? 'white' : '#34C759'}
        onValueChange={onValueChange}
        value={value}
      />
    </View>
  )
}

export default TextWithToggleComp

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-between'
    },
    toggleText:{
        color:header_color
    }
})