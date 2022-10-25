import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const nav = useNavigation()

    useLayoutEffect(() => {
        nav.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView className="flex-1 px-4 py-6" >
            {/* header */}
            <View className="flex-row gap-2 items-center" >
                <Image
                    source={{
                        uri: 'https://links.papareact.com/wru',
                    }}
                    className="w-10 h-10 rounded-full"
                />
                <View>
                    <Text className="text-gray-400 font-bold">
                        Deliver Now
                    </Text>
                    <Text className="font-bold text-2xl">
                        Current Location
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen
