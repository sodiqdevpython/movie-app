import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import { View, Image, Dimensions, Text, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native';
import MoviesList from '../components/moviesList';
import Loading from '../components/loading';
import ListApiCall from '../api';
import DetailApiCall from '../api/detail';
import axios from 'axios';
import { baseURL, apiKey } from '../api';

var { width, height } = Dimensions.get('screen')

export default function Profile() {
    const [isLoading, setIsLoading] = useState(true)
    const [profile, setProfile] = useState(null)
    const [combinedPerson, setCombinedPerson] = useState(null)

    const { params: item } = useRoute()

    useEffect(() => {
        const urlProfile = [`person/${item}`, `person/${item}/combined_credits`]
        async function apiCall(url) {
            try {
                const responseProfile = await DetailApiCall(url[0])
                setProfile(responseProfile)

                const responseSimilarMovies = await axios.get(`${baseURL}${url[1]}?api_key=${apiKey}`)
                const similarMovi = await responseSimilarMovies.data.cast
                setCombinedPerson(similarMovi)

                setIsLoading(false)
            } catch (error) {
                console.log('Error at: ', error);
            }
        }

        apiCall(urlProfile)

    }, [])

    return (
        isLoading ? (
            <Loading />
        ) : (
            <View className='flex-1 bg-neutral-800'>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Navbar isAbsolute={false} />
                    <View className='flex items-center py-10'
                        style={{
                            shadowColor: 'gray',
                            shadowRadius: 40,
                            shadowOffset: { width: 0, height: 5 },
                            shadowOpacity: 1
                        }}
                    >
                        <View className='rounded-full overflow-hidden'>
                            <Image
                                source={{
                                    uri: `https://image.tmdb.org/t/p/w500/${profile.profile_path}`
                                }}
                                style={{
                                    width: width * 0.7,
                                    height: width * 0.7,
                                }}
                            />
                        </View>
                    </View>
                    <View>
                        <View className='felx items-center'>
                            <Text className='text-3xl text-white font-normal'>{profile?.name}</Text>
                            <Text className='text-neutral-400 text-lg font-light'>{profile?.place_of_birth}</Text>
                            <View className='bg-neutral-700 w-[95%] mt-5 rounded-full flex-row items-center justify-center'
                                style={{
                                    height: height * 0.07
                                }}
                            >
                                <View className='flex-1 border-r-2 border-r-neutral-400'>
                                    <Text className='text-center leading-6'><Text className='text-white tracking-wide text-lg'>Gender</Text>{'\n'}<Text className='text-neutral-400 tracking-wide'>{profile.gender === 1 ? "Female" : "Male"}</Text></Text>
                                </View>
                                <View className='flex-1 border-r-2 border-r-neutral-400'>
                                    <Text className='text-center leading-6'><Text className='text-white tracking-wide text-lg'>Birthday</Text>{'\n'}<Text className='text-neutral-400 tracking-wide'>{profile.birthday}</Text></Text>
                                </View>
                                {
                                    profile.deathday === null ? <View className='flex-1'>
                                        <Text className='text-center leading-6'><Text className='text-white tracking-wide text-lg'>Popularity</Text>{'\n'}<Text className='text-neutral-400 tracking-wide'>{profile?.popularity.toFixed(2)}%</Text></Text>
                                    </View> : <View className='flex-1'>
                                        <Text className='text-center leading-6'><Text className='text-white tracking-wide text-lg'>Death</Text>{'\n'}<Text className='text-neutral-400 tracking-wide'>{profile.deathday}</Text></Text>
                                    </View>
                                }
                            </View>
                        </View>
                        <View className='px-3 pt-4'>
                            <Text className='text-white text-lg py-1'>Biography</Text>
                            <Text className='text-neutral-400'>{profile.biography}</Text>
                        </View>
                        <View className='px-2'>
                            <MoviesList data={combinedPerson} leftSideText={'Movies'} />
                        </View>
                    </View>
                </ScrollView>

            </View >
        )
    )
}