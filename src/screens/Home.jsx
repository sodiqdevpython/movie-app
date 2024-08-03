import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, Feather } from '../icons'
import TrendingMovies from '../components/trendingMovies'
import MoviesList from '../components/moviesList'

export default function Home() {
    const movies = [
        { id: 1, title: 'Ironman in Afghanistan', image: require('../images/ironman1.jpg') },
        { id: 2, title: 'Incredeble Hulk', image: require('../images/hulk2.jpg') },
        { id: 3, title: 'Ironman vs Ivan', image: require('../images/ironman2.jpg') },
        { id: 4, title: 'Ironman vs Mandarin', image: require('../images/ironman3.jpg') },
    ]
    const reversedMovies = [...movies].reverse()
    return (
        <View className='flex-1 bg-neutral-800'>
            <StatusBar style='light' />
            <SafeAreaView>
                <View className='flex-row justify-between items-center px-3'>
                    <TouchableOpacity>
                        <Feather name="align-left" size={32} color="white" />
                    </TouchableOpacity>
                    <Text className='text-white text-3xl'><Text className='text-[#eab308]'>M</Text>ovies</Text>
                    <TouchableOpacity>
                        <AntDesign name="search1" size={32} color="white" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <ScrollView overScrollMode='never' showsVerticalScrollIndicator={false}>
                <Text className='py-5 text-white text-xl px-3'>Trending</Text>
                <TrendingMovies className='px-0' data={movies} />
                <MoviesList data={movies} leftSideText={'Upcoming'} rightSideText={'See All'} />
                <MoviesList data={reversedMovies} leftSideText={'Top Rated'} rightSideText={'See All'} />
            </ScrollView>
        </View>
    )
}