import { View,Text, StyleSheet, Image } from "react-native"
import { primary_color } from "../constant/COLOR"
import { useEffect } from "react"

const SplashScreen = ({navigation}) =>{

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('AuthOptionScreen')
        },4000)
    },[])

    return(
        <View style={styles.container}>
            <Image
                source={require('../assets/icons/laza_logo.png')}
            />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:primary_color,
        justifyContent:'center',
        alignItems:'center'
    }
})