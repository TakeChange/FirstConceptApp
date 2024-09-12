import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const HeaderComp = ({imgSrc,icon1,icon2,centerText}) => {
  return (
    <View style={styles.container}>
      <AntDesign name={icon1} color={'black'} size={25}/>
      {imgSrc==null?
      <Text style={styles.headerText}>{centerText}</Text>
      : 
      <Image
        source={imgSrc}
      />}
      <SimpleLineIcons name={icon2} color={'black'} size={25}/>
    </View>
  )
}

export default HeaderComp

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:25
    },
    headerText:{
        color:'#1D1E20',
        fontWeight:'bold',
        fontSize:17
    }
})