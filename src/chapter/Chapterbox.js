import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Chapterbox = (props) => {
    const item = props.item
    return (

        
        <View style={styles.main}>
            <View style={{
                height: 60, width: 70,
                backgroundColor: '#C0C0C0',
                justifyContent:'center'
            }}>
                <Text style={[styles.text, styles.id]}>{item.id}</Text>
            </View>
            <Text style={styles.text}>{item.name}</Text>
        </View>
    )
}

export default Chapterbox

const styles = StyleSheet.create({
    main: {
        height: 70,
        borderBottomWidth: 1,
        borderColor: 'gray',
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        paddingHorizontal: 10,
        margin: 5
    },
    text: {
        color: 'black',
        fontSize: 20,
        width: '80%'
    },
    id: {
        fontSize: 30,
        padding: 10,
        fontWeight: '400',
        textAlign:'center'

    }
})