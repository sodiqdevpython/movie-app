import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Detail({ navigation }) {
    return (
        <View className='flex-1 justify-center items-center bg-red-600'>
            <Text>Home</Text>
            <Button title="Home =>" onPress={() => navigation.navigate('Home')} />
        </View>
    )
}