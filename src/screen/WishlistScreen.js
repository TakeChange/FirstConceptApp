import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HeaderComp from '../component/HeaderComp'

const WishlistScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderComp icon1={'arrowleft'} icon2={'handbag'} centerText={'Wishlist'}/>
    </View>
  )
}

export default WishlistScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20
    }
})