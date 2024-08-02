import React from 'react'
import { View, Text, Dimensions, Image, TouchableWithoutFeedback } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
var { width, height } = Dimensions.get('window')

export default function TrendingMovies({ data }) {
    return (
        <GestureHandlerRootView>
            <View>
                <Carousel
                    loop
                    width={width}
                    height={height * 0.6}
                    autoPlay={true}
                    data={data}
                    scrollAnimationDuration={4000}
                    renderItem={({ item }) => (
                        <TouchableWithoutFeedback>
                            <View className='justify-center items-center'>
                                <Image
                                    className='rounded-3xl'
                                    style={{
                                        width: width * 0.8,
                                        height: height * 0.5
                                    }} source={item.image} />
                                <Text className='text-white mt-3 text-xl'>
                                    {item.title.length > 30 ? item.title.slice(0, 30) + '...' : item.title}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                />
            </View>
        </GestureHandlerRootView>
    )
}