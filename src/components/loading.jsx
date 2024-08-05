import { View, Dimensions } from 'react-native'
import LottieView from 'lottie-react-native'
import { StatusBar } from 'expo-status-bar'

var { width, height } = Dimensions.get('window')

export default function Loading() {
    return (
        <View className='flex-1 justify-center items-center bg-neutral-800'>
            <StatusBar style='light' />
            <LottieView
                autoPlay
                style={{
                    width: width * 0.7,
                    height: height * 0.5
                }}
                source={require('../animation.json')}
            />
        </View>
    )
}