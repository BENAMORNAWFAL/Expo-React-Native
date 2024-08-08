import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Icon from 'react-native-vector-icons/FontAwesome';
import {themeColors} from '@/theme'
import Categories from '../components/categories'
import { featured } from '@/constants';
import FeaturedRow from '@/components/featuredRow'
import { getFeaturedRestaurants } from '@/api';


export default function HomeScreen() {
  const [featuredRestaurant, setFeaturedRestaurant]=useState([])
  useEffect(()=>{
    getFeaturedRestaurants().then(data=>{
      setFeaturedRestaurant(data)
    })

  },[])



  return (
    <SafeAreaView className="bg-gray">
      <StatusBar barStyle="dark-content" />
      {/* Search Bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon name="search" size={25} color="gray" />
          <TextInput placeholder='Restaurants' className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300" >
            <Icon name="map-marker" size={25} color="gray" />
            <Text className="text-gray-600">Kebili</Text>
          </View>
        </View>
        <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3 rounded-full">
          <Icon name="sliders" size={25} color="white" />
        </View>
      </View>
      {/* Main Page */}
      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom:20
        }}
        >
          {/* Categories */}
          <Categories/>

          {/* Featured */}
          <View className="mt-5 mb-9"> 
            {featuredRestaurant?
              featuredRestaurant.map((item,index)=>{
                return(
                  <FeaturedRow key={index}
                    title={item.title}
                    restaurants={item.restaurants}
                    description={item.description}
                  />
                )
              })
            :NaN}
          </View>


        </ScrollView>
    </SafeAreaView>
  )
}