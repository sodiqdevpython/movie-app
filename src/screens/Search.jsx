import React, { useCallback, useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableWithoutFeedback, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native'
import { FontAwesome6 } from '../icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import debounce from 'lodash.debounce'
import axios from 'axios'
import Loading from '../components/loading'

var { width, height } = Dimensions.get('window')

export default function Search() {
    const [results, setResults] = useState([])
    const [searched, setSearched] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const navigation = useNavigation()

    const debouncedSearch = useCallback(
        debounce(async (query) => {
            if (query.length > 3) {
                setIsLoading(true);
                try {
                    const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
                        params: {
                            query: query,
                            include_adult: false,
                            language: 'en-US',
                            page: 1,
                        },
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDU5YzMxNDBkZjE5YmRkMjdlMDJmMjIxMWI0NDJhMCIsIm5iZiI6MTcyMjgzMTExMC4xNzA0MDgsInN1YiI6IjY2YWYyM2E4NmExOWQ0YmZmMWMzN2IwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.agQ2jHjzql-7wbIYYh0e28cDDzK9o8Akdwdd5YVk3kA`,
                        },
                    });
                    const getData = await response.data;
                    setResults(getData.results);
                } catch (error) {
                    console.error('Error fetching data:', error.response || error.message);
                } finally {
                    setIsLoading(false);
                }
            } else {
                setResults([]);
            }
        }, 300),
        []
    );

    useEffect(() => {
        debouncedSearch(searched)
        return () => {
            debouncedSearch.cancel()
        }
    }, [searched])

    function renderItem({ item }) {
        if (item.backdrop_path !== null) {
            return (
                <View className='px-2 py-3'>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Detail', item)}>
                        <Image
                            className='rounded-xl'
                            style={{
                                width: width * 0.44,
                                height: height * 0.3
                            }} source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} />
                    </TouchableWithoutFeedback>
                    <Text className='text-center text-white mt-1'>{item?.title?.length > 20 ? item?.title?.slice(0, 20) + '...' : item?.title}</Text>
                </View>
            )
        } else {
            return null;
        }
    }

    return (
        <View className='flex-1 bg-neutral-800 px-2'>
            <SafeAreaView>
                <View className='flex-row justify-between items-center border-4 border-gray-900 rounded-full'>
                    <TextInput
                        value={searched}
                        onChangeText={text => setSearched(text)}
                        className='font-extralight pl-3 w-[80%] text-white'
                        placeholderTextColor={'gray'}
                        placeholder='Search Movie'
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <FontAwesome6 name="xmark-circle" size={48} color="gray" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <Text className='text-gray-100 mt-2 mx-2 pb-3'>Results ({results?.length})</Text>
            {
                isLoading ? (
                    <View className='flex-1 justify-center items-center'>
                        <Loading />
                    </View>
                ) : searched.length < 3 ? (
                    <View>
                        <Image
                            source={require('../images/not-found.png')}
                            style={{
                                width: width,
                                height: height * 0.5
                            }}
                        />
                    </View>
                ) : (
                    <FlatList
                        data={results}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                        numColumns={2}
                        contentContainerStyle={{ justifyContent: 'space-between' }}
                    />
                )
            }
        </View>
    )
}
