import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState } from "react"
import { Text, View } from "react-native"
import { Button } from "react-native-paper"

const Login = () => {

  const [value, setValue] = useState('')

  const setData = async () => {
    try {
      await AsyncStorage.setItem('sname', 'Disha');

      const temp = await AsyncStorage.getItem('sname');
      setValue(temp);
    } catch (error) {
      console.log('error:', error)
    }
  }

  const removeValue = async () => {
    await AsyncStorage.removeItem('sname')

    const temp = await AsyncStorage.getItem('sname'); 
    setValue(temp);
  }

  return (
    <View style={{ marginTop: 100 }}>
      <Button mode='contained' onPress={setData}>Set Value</Button>

      <View style={{ marginTop: 100 }}>
        <Text style={{ color: 'black' }}>Student Name : {value == '' ? null : value}</Text>
      </View>

      <Button mode='contained' onPress={removeValue}>Remove Value</Button>

    </View>
  )
}

export default Login