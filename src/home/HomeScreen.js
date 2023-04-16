import { StyleSheet, View } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import { classData } from '../Data'

const HomeScreen = (onPress) => {


    return (
        <View style={styles.home}>
            {
                classData.map((item, index) => {
                    return (
                        <Card key={index} onPress={onPress} item={item} />

                    )
                })
            }
        </View>



        // data={classData}
        // renderItem={({ item }) => (
        //     
        // )}

    )
}

export default HomeScreen



const styles = StyleSheet.create({
    home: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
})