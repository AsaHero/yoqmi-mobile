import {Text, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import { gifs } from '../constants'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  var content = null;
  if (isLoading) {
    content = <View className="w-14 h-14 flex items-center justify-center">
      <Image source={gifs.loading} className="w-full h-full"
      resizeMode="contain"/>
    </View>
  } else {
    content = <Text className={`text-primary font-semibold text-lg ${textStyles}`}>
    {title}
    </Text>
  }
  return (
    <TouchableOpacity
    onPress={handlePress}
    activeOpacity={0.7}
    className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading? 'opacity-50': ''}`} disabled={isLoading}>
      {content}
    </TouchableOpacity>
  )
}

export default CustomButton