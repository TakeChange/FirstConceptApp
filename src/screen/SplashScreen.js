import { useEffect } from "react"
import { Image, StyleSheet, Text, View } from "react-native"

const SplashScreen=({navigation})=>{
   
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Login')
        },5000)
    },[])

    return(
        <View style={styles.container}>
            <View style={styles.subContainer}>

                <View>
                    <Image
                        source={require('../assets/images/Group.png')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.hedaerText}>nectar</Text>
                    <Text style={styles.footerText}>online groceriet</Text>
                </View>
            </View>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#53B175',
        justifyContent:'center',
        alignItems:'center'
    },
    subContainer:{
        flexDirection:'row'
    },
    textContainer:{
        marginLeft:10
    },
    hedaerText:{
        fontSize:46,
        fontWeight:'bold',
        color:'white',
        lineHeight:44
    },
    footerText:{
        color:'white',
        letterSpacing:2,
        lineHeight:13
    }
})