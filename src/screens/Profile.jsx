import React from 'react'
import Navbar from '../components/navbar'
import { View, Image, Dimensions, Text, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native';
import MoviesList from '../components/moviesList';

var { width, height } = Dimensions.get('screen')

export default function Profile() {
    const movies = [
        { id: 1, title: 'Ironman in Afghanistan', image: require('../images/ironman1.jpg') },
        { id: 2, title: 'Incredeble Hulk', image: require('../images/hulk2.jpg') },
        { id: 3, title: 'Ironman vs Ivan', image: require('../images/ironman2.jpg') },
        { id: 4, title: 'Ironman vs Mandarin', image: require('../images/ironman3.jpg') },
    ]
    const { params: item } = useRoute()

    return (
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
                            source={item.image}
                            style={{
                                width: width * 0.7,
                                height: width * 0.7,
                            }}
                        />
                    </View>
                </View>
                <View>
                    <View className='felx items-center'>
                        <Text className='text-3xl text-white font-normal'>Robert Downey</Text>
                        <Text className='text-neutral-400 text-lg font-light'>California, Malibu</Text>
                        <View className='bg-neutral-700 w-[95%] mt-5 rounded-full flex-row items-center justify-center'
                            style={{
                                height: height * 0.07
                            }}
                        >
                            <View className='flex-1 border-r-2 border-r-neutral-400'>
                                <Text className='text-center leading-6'><Text className='text-white tracking-wide text-lg'>Gender</Text>{'\n'}<Text className='text-neutral-400 tracking-wide'>Male</Text></Text>
                            </View>
                            <View className='flex-1 border-r-2 border-r-neutral-400'>
                                <Text className='text-center leading-6'><Text className='text-white tracking-wide text-lg'>Birthday</Text>{'\n'}<Text className='text-neutral-400 tracking-wide'>1965-04-04</Text></Text>
                            </View>
                            <View className='flex-1'>
                                <Text className='text-center leading-6'><Text className='text-white tracking-wide text-lg'>Popularity</Text>{'\n'}<Text className='text-neutral-400 tracking-wide'>100%</Text></Text>
                            </View>
                        </View>
                    </View>
                    <View className='px-3 pt-4'>
                        <Text className='text-white text-lg py-1'>Biography</Text>
                        <Text className='text-neutral-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et aut facere cum, rerum laboriosam assumenda omnis inventore suscipit deserunt illum vero officiis ex enim ut similique odit placeat totam optio quisquam corporis sapiente at explicabo. Quidem dolor nemo ullam? Nam ut esse, explicabo magnam pariatur nemo repudiandae impedit! Architecto reiciendis ut a vel, pariatur veritatis iste debitis! Laborum sequi, deleniti mollitia eos ipsum sunt ab eaque rerum dolore illo temporibus, assumenda, qui omnis neque ratione incidunt tempore quas inventore ipsam commodi doloremque odit veniam? Enim, accusamus est sunt nam repellendus beatae ipsum consequuntur quas sint minus atque nulla doloremque optio!</Text>
                    </View>
                    <View className='px-2'>
                        <MoviesList data={movies} leftSideText={'Movies'} />
                    </View>
                </View>
            </ScrollView>

        </View >
    )
}