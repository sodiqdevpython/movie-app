import React from 'react'
import { View, Text, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
var { width, height } = Dimensions.get('screen')

export default function Cast({ data }) {
    return (
        <View className='mt-4'>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={data}
                renderItem={({ item }) => <CastDetail item={item} />}
            />
        </View>
    )
}

function CastDetail({ item }) {

    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.push('Profile', item)}>
            <View className='px-2'>
                <View className='rounded-full overflow-hidden items-center'>
                    <Image
                        style={{
                            width: width * 0.21,
                            height: height * 0.1
                        }}
                        source={item.image}
                    />
                </View>
                <Text className='text-white text-xs text-center'>Tony Stark</Text>
                <Text className='text-neutral-400 text-xs text-center'>Robert Downey</Text>
            </View>
        </TouchableOpacity>
    )
}