import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '../icons'
import React, { useState } from 'react'

export default function Navbar({ isAbsolute = true }) {

    const navigation = useNavigation()

    const [isLiked, setIsLiked] = useState(false);

    function likeBos() {
        return (
            isLiked ? (
                <AntDesign name="heart" size={36} className={'text-red-700'} />
            ) :
                (
                    <AntDesign name="hearto" size={36} className={'text-white'} />
                )
        )
    }

    return (
        <SafeAreaView className={`${isAbsolute ? 'absolute' : 'static'} px-3 w-full flex-row justify-between items-center z-10 mt-2`}>
            <TouchableOpacity onLongPress={() => navigation.navigate('Home')} onPress={() => navigation.goBack()}>
                <AntDesign name="leftcircle" size={40} className="text-[#eab308]" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => !isLiked ? setIsLiked(true) : setIsLiked(false)}>
                {
                    likeBos()
                }
            </TouchableOpacity>
        </SafeAreaView>
    )
}