import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
const SplashScreen = () => {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 2000)
    })
    return (
        <View style={styles.splashScreen}>
            <Text style={{fontSize:25,color:'red'}}>Toor Acadmey</Text>
            <Text style={{fontSize:17,color:'black'}}>Learn Smarter</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    splashScreen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})