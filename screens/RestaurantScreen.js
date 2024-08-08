import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { themeColors } from '@/theme';
import DishRow from '@/components/dishRow'
import CartIcon from '@/components/cartIcon'
import { StatusBar } from 'expo-status-bar';
import { useDispatch } from 'react-redux';
import {setRestaurant} from '../slices/restaurantSlice'
import { urlFor } from '@/sanity';

export default function RestaurantScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();

  let item = params;
  const dispatch=useDispatch()

  useEffect(()=>{
    if(item && item._id){
      dispatch(setRestaurant({...item}))
    }

  },[])





  return (
    <View>
      <CartIcon />
      <StatusBar style='light' />
      <ScrollView>
        <View className="relative">
          <Image source={{uri: urlFor(item.image).url()}} className="w-full h-72" />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <Icon name="arrow-left" size={25} color={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>


        <View style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }} className="bg-white -mt-12 pt-6">
          <View className="px-5">
            <Text className="text-3xl font-bold" > {item.name} </Text>
            <View className="flex-row space-x-2 my-1" >
              <View className="flex-row items-center space-x-1">
                <Image source={require('@/assets/images/star.png')} className="h-4 w-4" />
                <Text className="text-xs">
                  <Text className="text-green-700">{item.stars} </Text>
                  <Text className="text-gray-700">
                    ({item.reviews} review) . <Text className="font-semibold">{item?.type?.name}</Text>
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon name="map-marker" size={15} color="gray" />
                <Text className="text-gray-700 text-xs">Douz. {item.address} </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2"> {item.description} </Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/* dishes */}
          {
            item.dishes.map((dish, index)=><DishRow item={{...dish}} key={index} />)
          }
        </View>
      </ScrollView>
    </View>
  )
}