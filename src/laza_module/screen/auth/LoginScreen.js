import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BackWithHeaderComp from '../../component/BackWithHeaderComp'
import { backIcon } from '../../constant/IconConst'
import { black_faint, header_color } from '../../constant/COLOR'
import TitleWithTextInputComp from '../../component/TitleWithTextInputComp'
import TextWithToggleComp from '../../component/TextWithToggleComp'
import LazaButtonComp from '../../component/LazaButtonComp'

const LoginScreen = () => {

  const [toggleValue, setToggleValue] = useState(false)

  const changeToggle = () => {
    setToggleValue(!toggleValue)
  }

  return (
    <View style={styles.container}>

      <View style={styles.firstContainer}>

        <View style={styles.headerView}>
          <BackWithHeaderComp
            StartUrl={backIcon}
          />
          <Text style={styles.headerText}>Welcome</Text>
          <Text style={styles.subHeaderText}>Please enter your data to continue</Text>
        </View>

        <View style={styles.inputView}>
          <TitleWithTextInputComp
            label={'Username'}

          />
          <TitleWithTextInputComp
            label={'Password'}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.forgetView}>
            <Text style={styles.forgetText}>Forgot password?</Text>
          </TouchableOpacity>
          <TextWithToggleComp
            value={toggleValue}
            onValueChange={changeToggle}
            textValue={'Remember me'}
          />
        </View>

        <View style={styles.buttonView}>

          <Text style={styles.conditionText}>By connecting your account confirm that you agree with our <Text style={{ color: 'black', fontWeight: '500' }}>Term and Condition</Text></Text>

          <View style={styles.buttonStyle}>
            <LazaButtonComp 
              buttonText={'Login'}
            />
          </View>

        </View>
      </View>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  firstContainer: {
    //padding: 15,
    flex: 1,
    //backgroundColor: 'red'
  },
  headerText: {
    fontSize: 28,
    fontWeight: '500',
    color: header_color,
    textAlign: 'center',
    marginTop: 5
  },
  subHeaderText: {
    fontSize: 15,
    color: black_faint,
    textAlign: 'center'
  },
  headerView: {
    flex: 1,
    //backgroundColor: 'yellow',
    margin: 15,
  },
  inputView: {
    flex: 1.5,
    //backgroundColor: 'green',
    margin: 15,
  },
  buttonView: {
    flex: .6,
    //backgroundColor: 'blue'
  },
  forgetText: {
    color: 'red',
    textAlign: 'right'
  },
  buttonStyle: {
    bottom: 0,
    position: 'absolute',
    width: '100%'
  },
  conditionText: {
    textAlign: 'center',
    margin: 10,
    color: black_faint,
    fontSize: 14
  }
})