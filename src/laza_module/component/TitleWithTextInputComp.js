import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { black_faint, border_color } from '../constant/COLOR'
import { TextInput } from 'react-native-paper'

const TitleWithTextInputComp = ({label,value,onChangeText,secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        label={label}
        style={styles.textInputStyle}
        underlineColor={border_color}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

export default TitleWithTextInputComp

const styles = StyleSheet.create({
    container:{
        marginTop:10
    },
    titleStyle:{
        color:black_faint
    },
    textInputStyle:{
        backgroundColor:'white',
        fontSize:13,
        color:black_faint
    }
})