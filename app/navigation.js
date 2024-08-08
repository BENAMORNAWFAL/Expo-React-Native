import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import CartScreen from '../screens/CartScreen'
import OrderPrepairingScreen from '../screens/OrderPrepairingScreen'
import DeliveryScreen from '../screens/DeliveryScreen'
import OpenAppScreen from '../screens/OpenAppScreen'
import LoginScreen from '../screens/LoginScreen'
import RegistrationScreen from '../screens/RegistrationScreen'

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        // <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="OpenApp" component={OpenAppScreen} />
                {/* <Stack.Screen name="Register" component={RegistrationScreen} /> */}
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Restaurant" component={RestaurantScreen} />
                <Stack.Screen name="Cart" options={{presentation: 'modal'}} component={CartScreen} />
                <Stack.Screen name="OrderPrepairing" options={{presentation: 'fullScreenModal'}} component={OrderPrepairingScreen} />
                <Stack.Screen name="Delivery" options={{presentation: 'fullScreenModal'}} component={DeliveryScreen} />

            </Stack.Navigator>
        // </NavigationContainer>
    )
}