import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, Feather } from '../icons'
import TrendingMovies from '../components/trendingMovies'
import MoviesList from '../components/moviesList'
import { useNavigation } from '@react-navigation/native'
import Loading from '../components/loading'
import ListApiCall from '../api'

export default function Home() {

    const navigation = useNavigation()
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(null)
    const [upcoming, setUpcoming] = useState(null)
    const [topRated, setTopRated] = useState(null)

    useEffect(() => {
        const urls = ['trending/movie/week', 'movie/upcoming', 'movie/top_rated']
        async function callApi(url) {
            try {
                const responseTrending = await ListApiCall(url[0])
                setData(responseTrending)

                const responseUpcoming = await ListApiCall(url[1])
                setUpcoming(responseUpcoming)

                const responseTopRated = await ListApiCall(url[2])
                setTopRated(responseTopRated)

                setIsLoading(false)
            } catch (error) {
                console.log('Error at:', error);
            }
        }

        callApi(urls)
    }, [])



    const movies = [
        { id: 1, title: 'Ironman in Afghanistan', image: require('../images/ironman1.jpg') },
        { id: 2, title: 'Incredeble Hulk', image: require('../images/hulk2.jpg') },
        { id: 3, title: 'Ironman vs Ivan', image: require('../images/ironman2.jpg') },
        { id: 4, title: 'Ironman vs Mandarin', image: require('../images/ironman3.jpg') },
    ]
    const reversedMovies = [...movies].reverse()

    return (
        isLoading ? (
            <Loading />
        ) : (
            <View className='flex-1 bg-neutral-800'>
                <StatusBar style='light' />
                <SafeAreaView>
                    <View className='flex-row justify-between items-center px-3'>
                        <TouchableOpacity onPress={() => Alert.alert('?', "Bu yerga nima qo'yishni bilmadim")}>
                            <Feather name="align-left" size={32} color="white" />
                        </TouchableOpacity>
                        <Text className='text-white text-3xl'><Text className='text-[#eab308]'>M</Text>ovies</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                            <AntDesign name="search1" size={32} color="white" />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
                <ScrollView overScrollMode='never' showsVerticalScrollIndicator={false}>
                    <Text className='py-5 text-white text-xl px-3'>Trending</Text>
                    <TrendingMovies className='px-0' data={data} />
                    <MoviesList data={upcoming} leftSideText={'Upcoming'} rightSideText={'See All'} />
                    <MoviesList data={topRated} leftSideText={'Top Rated'} rightSideText={'See All'} />
                </ScrollView>
            </View>
        )
    )
}
