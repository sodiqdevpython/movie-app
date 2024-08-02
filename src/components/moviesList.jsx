import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native'


var { width, height } = Dimensions.get('window')

export default function MoviesList({ data }) {
    return (
        <View className='px-2'>
            <View className='flex-row justify-between'>
                <Text className='text-white text-xl'>Upcoming</Text>
                <TouchableOpacity>
                    <Text className='text-[#eab308] text-xl'>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                className='mt-5'
                horizontal
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Image
                            className='mx-2 rounded-2xl'
                            style={{
                                width: width * 0.33,
                                height: height * 0.22
                            }}
                            source={item.image} />
                    </View>
                )}
            />
        </View>
    )
}