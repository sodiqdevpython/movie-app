import React from 'react'
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel'
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { View, Text, Dimensions, Image, TouchableWithoutFeedback } from 'react-native'


var { width, height } = Dimensions.get('window')

export default function TrendingMovies({ data }) {
    return (
        <GestureHandlerRootView>
            <View>
                <Carousel
                    loop
                    width={width}
                    height={height * 0.55}
                    autoPlay={true}
                    data={data}
                    scrollAnimationDuration={2000}
                    renderItem={({ item }) => <MovieCard item={item} />}
                />
            </View>
        </GestureHandlerRootView >
    )
}

function MovieCard({ item }) {

    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Detail', item)}>
            <View className='justify-center items-center'>
                <Image
                    className='rounded-3xl'
                    style={{
                        width: width * 0.8,
                        height: height * 0.5
                    }} source={item.image} />
                {/* <Text className='text-white mt-3 text-xl'>
                    {item.title.length > 30 ? item.title.slice(0, 30) + '...' : item.title}
                </Text> */}
            </View>
        </TouchableWithoutFeedback >
    )
}