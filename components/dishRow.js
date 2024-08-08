import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '@/theme'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart, removeFromCart, selectCartItemsById} from '../slices/cartSlice'
import { urlFor } from '@/sanity';

export default function DishRow({ item }) {
    const dispatch=useDispatch()
    const totalItems = useSelector(state=> selectCartItemsById(state, item._id))
    
    const handleDecrease=()=>{
        dispatch(removeFromCart({id: item._id}))
    }
    
    const handleInrease=()=>{
        dispatch(addToCart({...item}))
    }

    return (
        <View className="flex-row item-center bg-white p-3 rouded-3xl shadow-2xl mb-2 mx-2">
            <Image className="rounded-3xl" style={{ height: 100, width: 100 }} source={{uri: urlFor(item.image).url()}} />
            <View className="flex flex-1 space-y-3">
                <View className="pl-3">
                    <Text className="text-xl" > {item.name} </Text>
                    <Text className="text-gray-700" > {item.description} </Text>
                </View>
                <View className="flex-row justify-between pl-3 items-center">
                    <Text className="text-gray-700 text-lg font-bold">
                        {item.price} TND
                    </Text>
                    <View className="flex-row items-center">
                        <TouchableOpacity onPress={handleDecrease} disabled={!totalItems.length} className="p-1 rounded-full" style={{ backgroundColor: themeColors.bgColor(1) }}>
                            <Icon name="minus" size={20} color="white" />
                        </TouchableOpacity>
                        <Text className="px-3"> {totalItems.length} </Text>
                        <TouchableOpacity onPress={handleInrease} className="p-1 rounded-full" style={{ backgroundColor: themeColors.bgColor(1) }}>
                            <Icon name="plus" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}