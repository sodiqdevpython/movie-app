import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, Dimensions, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
var { width, height } = Dimensions.get('window')

export default function MoviesList({ data, leftSideText, rightSideText }) {
    const navigation = useNavigation()

    return (
        <View className='px-2 py-2'>
            <View className='flex-row justify-between'>
                <Text className='text-white text-xl'>{leftSideText}</Text>
                <TouchableOpacity>
                    <Text className='text-[#eab308] text-xl'>{rightSideText}</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                className='mt-5'
                horizontal
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableWithoutFeedback onPress={() => navigation.push('Detail', item)}>
                        <View className='px-2 pb-2'>
                            <Image
                                className='rounded-2xl'
                                style={{
                                    width: width * 0.33,
                                    height: height * 0.22
                                }}
                                source={item.image} />
                            <Text className='text-center text-white mt-1'>{item.title.length > 18 ? item.title.slice(0, 16) + '...' : item.title}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                )}
            />
        </View>
    )
}