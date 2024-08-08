import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function OrderPrepairingScreen() {
  const navigation=useNavigation()
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Delivery')
    },2000)
  })
  return (
    <View className="flex-1 bg-gray justify-center items-center">
      <Image source={require('@/assets/images/homedelivery.png')} className="h-90 w-90"/>
    </View>
  )
}