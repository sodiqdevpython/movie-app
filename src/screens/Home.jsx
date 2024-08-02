import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '../icons'
import TrendingMovies from '../components/trendingMovies'
import MoviesList from '../components/moviesList'

export default function Home({ navigation }) {
    const movies = [
        { title: 'Ironman in Afghanistan Ironman in Afghanistan', image: require('../images/ironman1.jpg') },
        { title: 'Incredeble Hulk', image: require('../images/hulk2.jpg') },
        { title: 'Ironman vs Ivan', image: require('../images/ironman2.jpg') },
        { title: 'Ironman vs Mandarin', image: require('../images/ironman3.jpg') },
    ]
    return (
        <View className='flex-1 bg-neutral-800 px-3'>
            <StatusBar style='light' />
            <SafeAreaView>
                <View className='flex-row justify-between items-center'>
                    <TouchableOpacity>
                        <AntDesign name="menu-fold" size={32} color="white" />
                    </TouchableOpacity>
                    <Text className='text-white text-3xl'><Text className='text-[#eab308]'>M</Text>ovies</Text>
                    <TouchableOpacity>
                        <AntDesign name="search1" size={32} color="white" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text className='py-5 text-white text-xl'>Trending</Text>
                <TrendingMovies data={movies} />
                <MoviesList data={movies} />
            </ScrollView>
        </View>
    )
}