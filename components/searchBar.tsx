import { icons } from '@/constants/icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';

interface Props{
  placeholder: string;
  onPress: () => void;
}

const searchBar = ({placeholder,onPress}:Props) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
       <Image source={icons.search} className='size-5' resizeMode='contain' tintColor='#AB8BFF'/>
       <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value =""
        placeholderTextColor="#A8B5DB"
        className="flex-1 text-white ml-3"
      />
    </View>
  )
}

export default searchBar