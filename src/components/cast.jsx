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
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

function CastDetail({ item }) {

    const navigation = useNavigation()

    return (
        item.profile_path !== null ? (
            <TouchableOpacity onPress={() => navigation.push('Profile', item.id)}>
                <View className='px-2'>
                    <View className='rounded-full overflow-hidden items-center'>
                        <Image
                            style={{
                                width: width * 0.21,
                                height: height * 0.1
                            }}
                            source={{
                                uri: `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                            }}
                        />
                    </View>
                    <Text className='text-white text-xs text-center'>{item?.original_name?.length > 12 ? item?.original_name?.slice(0, 12) + '...' : item?.original_name}</Text>
                    <Text className='text-neutral-400 text-xs text-center'>{item?.character?.length > 12 ? item?.character?.slice(0, 12) + '...' : item?.character}</Text>
                </View>
            </TouchableOpacity>
        ) : (
            <View></View>
        )
    )
}