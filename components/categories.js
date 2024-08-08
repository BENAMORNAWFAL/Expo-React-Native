import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { categories } from '@/constants/index'
import {getCategories} from '@/api'
import {urlFor} from '@/sanity'

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState(null)
    const [activeName, setActiveName] = useState(null)

    const [categories,setCategories]=useState([])
    useEffect(()=>{
        getCategories().then(data=>{
            // console.log("$$$$$$$$$$$$$$$$$$$$$$$$$data: ",data)
            setCategories(data);
        })
    },[])

    console.log("================================",activeCategory);
    console.log("********************************",activeName);

    return (
        <View className="mt-4">
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="overflow-visible" contentContainerStyle={{
                paddingHorizontal: 15
            }}
            >
                {categories?
                    categories.map((category, index) => {
                       
                        let isActive = category._id == activeCategory
                        let btnClass = isActive ? ' bg-gray-600 ' : ' bg-gray-200 '
                        let textClass = isActive ? ' font-semibold text-gray-800 ' : ' text-gray-500 '
                        return (
                            <View key={index} className="flex justify-center items-center mr-6">
                                <TouchableOpacity onPress={() =>{ setActiveCategory(category._id);setActiveName(category.name)}}
                                    className={" p-1 rounded-full shadow bg-gray-200 "+btnClass}>
                                    <Image style={{ width: 45, height: 45, borderRadius: 50 }}
                                        source={{uri: urlFor(category.image).url()}} />
                                </TouchableOpacity>
                                <Text className={" text-sm "+textClass}>{category.name}</Text>
                            </View>
                        )
                    })
                :NaN}
            </ScrollView>
        </View>
    )
}