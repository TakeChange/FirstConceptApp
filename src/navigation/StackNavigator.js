import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SplashScreen from "../screen/SplashScreen"
import LoginScreen from "../screen/LoginScreen"
import WishlistScreen from "../screen/WishlistScreen"

const StackNavigator =()=>{

    const Stack = createNativeStackNavigator()
    return(
        <NavigationContainer>

            <Stack.Navigator>

            <Stack.Screen component={SplashScreen} name="Splash" options={{headerShown:false}} />
            <Stack.Screen component={LoginScreen} name="Login" options={{headerShown:false}}/>
            <Stack.Screen component={WishlistScreen} name='Wishlist' options={{headerShown:false}}/>

            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default StackNavigator;