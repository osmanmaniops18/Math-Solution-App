import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Chapterbox from './Chapterbox'
const ChapterScreen = ({ route }) => {
    const chapterName = route.params.data;
    return (
        <View>
            <View style={styles.cover}>
                <Text style={{ color: 'white', fontSize: 40 }}>Chapters</Text>
            </View>
            <View style={{ height: '80%' }} >
                <ScrollView   >
                    {
                        chapterName.map((item, index) => {
                            return(
                                <Chapterbox key={index} item={item} />
                            )
                        })
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default ChapterScreen

const styles = StyleSheet.create({
    cover: {
        height: 140,
        backgroundColor: 'black',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
        , alignItems: 'center',
        justifyContent: 'center'
    }
})