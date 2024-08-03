import React from 'react'
import { View, Text, Image, ScrollView, Dimensions } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';
import MoviesList from '../components/moviesList';
import Navbar from '../components/navbar';

import Cast from '../components/cast';

var { width, height } = Dimensions.get('screen')

export default function Detail() {

    const movies = [
        { id: 1, title: 'Ironman in Afghanistan', image: require('../images/ironman1.jpg') },
        { id: 2, title: 'Incredeble Hulk', image: require('../images/hulk2.jpg') },
        { id: 3, title: 'Ironman vs Ivan', image: require('../images/ironman2.jpg') },
        { id: 4, title: 'Ironman vs Mandarin', image: require('../images/ironman3.jpg') },
    ]

    const navigation = useNavigation()
    const { params: item } = useRoute()


    return (
        <View className='flex-1 bg-neutral-800'>
            <Navbar />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Image
                        style={{
                            width: width,
                            height: height * 0.5
                        }}
                        source={item.image}
                    />
                    <LinearGradient
                        colors={[
                            'transparent',
                            'rgba(23,23,23,0.8)',
                            'rgba(23,23,23,1)'
                        ]}
                        style={{
                            width: width,
                            height: height * 0.4
                        }}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        className='absolute bottom-0'
                    />
                </View>
                <View className='z-10 relative bottom-10'>
                    <Text className='text-white font-bold text-center text-3xl tracking-wider'>{item.title}</Text>
                    <Text className='text-neutral-400 text-center text-base mt-2'>Released · 2008 · 170min</Text>
                    <View className='mt-2 flex-row justify-center space-x-3 flex-wrap'>
                        <Text className='text-neutral-400 text-center text-base'>Action ·</Text>
                        <Text className='text-neutral-400 text-center text-base'>Thrill ·</Text>
                        <Text className='text-neutral-400 text-center text-base'>Comedy</Text>
                    </View>
                    <View className='px-3'>
                        <Text className='text-white mt-2 leading-6 tracking-wide'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempora amet, sint cum quos nisi? Consectetur maiores ea nesciunt! Voluptatibus veniam, ipsum unde atque praesentium vel! Quidem dolor iste nam nesciunt iusto! Dolorum, et! Incidunt officiis nulla facilis minima tempore at ipsum dolor! Necessitatibus blanditiis error quos adipisci doloribus quas nostrum, quisquam soluta pariatur possimus ex nobis fugit quibusdam, vero in ab, saepe recusandae magni omnis minus perferendis nemo cum sapiente iure? Officia porro veniam adipisci neque, culpa recusandae qui. Minus consequuntur illum dicta dolores? Sint minus aspernatur, nisi exercitationem saepe, assumenda ex perspiciatis quae deserunt dolorem ratione illo sit.
                        </Text>
                        <Text className='mt-3 text-xl text-white font-semibold'>Top Cast</Text>
                        <Cast data={movies} />
                        <View className='mt-5'>
                            <MoviesList data={movies} leftSideText={'Similar Movies'} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View >
    )
}