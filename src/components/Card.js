import { Image, Pressable, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
// import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
const Card = (props) => {
    const navigation = useNavigation()
    const item = props.item
    return (
        <Pressable onPress={() => navigation.navigate('Chapter',{data:item.cname})} style={styles.main}>
            <View style={[styles.Card, styles.boxShadow]}>
                {/* <Image
                    style={styles.background}
                    source={item.uri} /> */}
                <Text style={styles.text}>{item.name}</Text>
            </View>
        </Pressable>

    )
}

export default Card


const styles = StyleSheet.create({
    main: {
        padding: 15,
        display:'flex',
        flexDirection:'row'
    },
    Card: {
        height: 150,
        width: 135,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#D3D3D3',
        backgroundColor: 'white',
        marginBottom:15
    },
    boxShadow: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.18,
        shadowRadius: 4.59,
        elevation: 5
    },
    background: {

        height: '100%',
        width: '100%',
        resizeMode: 'contain',
        borderRadius: 14,
    },
    text: {
        fontSize: 25,
        paddingBottom: 5,
        color: 'black',
        textAlign: 'center'
    },
})