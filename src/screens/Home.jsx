import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Home({ navigation }) {
    return (
        <View className='flex-1 justify-center items-center bg-slate-800'>
            <Text>Home</Text>
            <Button title="Detail =>" onPress={() => navigation.navigate('Detail')} />
        </View>
    )
}