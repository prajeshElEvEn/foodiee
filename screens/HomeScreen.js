import { View, Text, SafeAreaView } from 'react-native'
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
        <SafeAreaView>
            <Text className="text-red-500">HomeScreen</Text>
        </SafeAreaView>
    )
}

export default HomeScreen
