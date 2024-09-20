import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import BackWithHeaderComp from '../../component/BackWithHeaderComp'
import { backIcon } from '../../constant/IconConst'
import { header_size } from '../../constant/FontSizeConst'
import { Button } from 'react-native-paper'
import LazaButtonComp from '../../component/LazaButtonComp'
import { black_faint } from '../../constant/COLOR'

const AuthOptionScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>

        <BackWithHeaderComp
          StartUrl={backIcon}
        />

        <Text style={styles.headerText}>
          Let’s Get Started
        </Text>
      </View>

      <View style={styles.buttonsView}>
        <Button
          icon="facebook"
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={styles.socialButton}
          buttonColor='#4267B2'
          labelStyle={{ padding: 6 }}
        >
          Facebook
        </Button>
        <Button
          icon="google"
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={styles.socialButton}
          buttonColor='#1DA1F2'
          labelStyle={{ padding: 6 }}
        >
          Google
        </Button>
        <Button
          icon="twitter"
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={styles.socialButton}
          buttonColor='#EA4335'
          labelStyle={{ padding: 6 }}
        >
          Twitter
        </Button>
      </View>

      <View style={styles.bottomView}>
        <View style={{ justifyContent: 'center', flex: 1 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center', color: black_faint }}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('LazaLogin')}>
              <Text style={{ fontWeight: '700', color: 'black' }}> Signin</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonView}>
          <LazaButtonComp
            buttonText={'Create an Account'}
            onPress={()=>navigation.navigate('LazaRegistration')}
          />
        </View>
      </View>
    </View>
  )
}

export default AuthOptionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'red'
  },
  headerView: {
    flex: 1,
    //backgroundColor: 'blue',
    padding: 15
  },
  buttonsView: {
    flex: 1,
    //backgroundColor: 'green',
    justifyContent: 'center',
    padding: 15
  },
  bottomView: {
    flex: 1,
    //backgroundColor: 'orange'
  },
  headerText: {
    color: 'black',
    fontWeight: '700',
    fontSize: header_size,
    textAlign: 'center'
  },
  socialButton: {
    borderRadius: 10,
    fontSize: 17,
    marginTop: 10,
    // padding:8
  },
  buttonView: {
    bottom: 0,
    position: 'absolute',
    width: '100%'
  }
})