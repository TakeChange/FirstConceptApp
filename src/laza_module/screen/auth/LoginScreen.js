import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BackWithHeaderComp from '../../component/BackWithHeaderComp'
import { backIcon } from '../../constant/IconConst'
import { black_faint, header_color } from '../../constant/COLOR'
import TitleWithTextInputComp from '../../component/TitleWithTextInputComp'
import TextWithToggleComp from '../../component/TextWithToggleComp'
import LazaButtonComp from '../../component/LazaButtonComp'
import { checkPassword, checkUsername } from '../../constant/Validation'

const LoginScreen = ({navigation}) => {

  const [toggleValue, setToggleValue] = useState(false)
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  const [usernameError,setUsernameError] = useState("")
  const [passwordError,setPasswordError] = useState("")

  const changeToggle = () => {
    setToggleValue(!toggleValue)
  }

  const checkValidation=()=>{
    var flag=true;
    setUsernameError(checkUsername(username))
    setPasswordError(checkPassword(password))

    console.log('usernameError:',usernameError)
    console.log('passwordError:',passwordError)

    if(usernameError!=""){
      flag=false
    }else if(passwordError!=""){
      flag=false
    }
    else
    if(flag==true){
      navigation.navigate('LazaHome')
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.firstContainer}>

        <View style={styles.headerView}>
          <BackWithHeaderComp
            StartUrl={backIcon}
            onPress={()=>navigation.navigate('AuthOptionScreen')}
          />
          <Text style={styles.headerText}>Welcome</Text>
          <Text style={styles.subHeaderText}>Please enter your data to continue</Text>
        </View>

        <View style={styles.inputView}>
          <TitleWithTextInputComp
            label={'Username'}
            onChangeText={(text)=>setUsername(text)}
          />
          <Text style={{color:'red'}}>{usernameError}</Text>
          <TitleWithTextInputComp
            label={'Password'}
            secureTextEntry={true}
            onChangeText={(pass)=>setPassword(pass)}
          />
          <Text style={{color:'red'}}>{passwordError}</Text>
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
              onPress={checkValidation}
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