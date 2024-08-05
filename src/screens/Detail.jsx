import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, Dimensions } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';
import Loading from '../components/loading';
import MoviesList from '../components/moviesList';
import Navbar from '../components/navbar';
import ListApiCall from '../api';
import DetailApiCall from '../api/detail';

import Cast from '../components/cast';

var { width, height } = Dimensions.get('screen')

export default function Detail() {
    const { params: item } = useRoute()
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(null)
    const [castData, setCastData] = useState(null)
    const [similarMovies, setSimilarMovies] = useState(null)
    useEffect(() => {
        const urlDetail = `movie/${item.id}`
        async function apiCall(urlDetail) {
            try {
                const responseDetail = await DetailApiCall(urlDetail)
                setData(responseDetail)

                const responseCast = await DetailApiCall(`${urlDetail}/credits`)
                setCastData(responseCast.cast)

                const responseSimilarMovies = await ListApiCall(`${urlDetail}/similar`)
                setSimilarMovies(responseSimilarMovies)

                setIsLoading(false)
            } catch (error) {
                console.log('Error at: ', error);
            }
        }
        apiCall(urlDetail)
    }, [])

    const movies = [
        { id: 1, title: 'Ironman in Afghanistan', image: require('../images/ironman1.jpg') },
        { id: 2, title: 'Incredeble Hulk', image: require('../images/hulk2.jpg') },
        { id: 3, title: 'Ironman vs Ivan', image: require('../images/ironman2.jpg') },
        { id: 4, title: 'Ironman vs Mandarin', image: require('../images/ironman3.jpg') },
    ]

    return (
        isLoading ? (
            <Loading />
        ) : (
            <View className='flex-1 bg-neutral-800'>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Navbar />
                    <View>
                        <Image
                            style={{
                                width: width,
                                height: height * 0.6
                            }}
                            source={{ uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}` }}
                        />
                        <LinearGradient
                            colors={[
                                'transparent',
                                'rgba(23,23,23,0.8)',
                                'rgba(23,23,23,1)'
                            ]}
                            style={{
                                width: width,
                                height: height * 0.5
                            }}
                            start={{ x: 0.5, y: 0 }}
                            end={{ x: 0.5, y: 1 }}
                            className='absolute bottom-0'
                        />
                    </View>
                    <View className='z-10 relative bottom-12'>
                        <Text className='text-white font-bold text-center text-3xl tracking-wider'>{data.original_title}</Text>
                        <Text className='text-neutral-400 text-center text-base mt-2'>Released · {data.release_date} · {data.runtime}min</Text>
                        <View className='mt-2 flex-row justify-center space-x-3 flex-wrap'>
                            {data.genres.map((genre) => (
                                <Text key={Math.random()} className='text-neutral-400 text-center text-base'>{genre.name}  ·</Text>
                            ))}
                        </View>
                        <View className='px-3'>
                            <Text className='text-white mt-2 leading-6 tracking-wide'>
                                {data.overview}
                            </Text>
                            <Text className='mt-3 text-xl text-white font-semibold'>Top Cast</Text>
                            <Cast data={castData} />
                            <View className='mt-5'>
                                <MoviesList data={similarMovies} leftSideText={'Similar Movies'} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View >
        )
    )
}