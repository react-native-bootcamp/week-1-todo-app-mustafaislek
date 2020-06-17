import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

const ListItem = props => {

    let styles = props.myData.isDone ? doneStyles : undoneStyles

    return (
        <TouchableOpacity style={styles.container} onPress={props.itemPress}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.dot} />
                <Text style={styles.text}>{props.myData.myEntry}</Text>
            </View>
            <Text>
                {
                    props.myData.isDone ? "Yapıldı!" : "Yapılmadı!"
                } 
            </Text>
            
            {/* {
                props.myData.isDone && <Text>Yapıldı!</Text>
            } */}

        </TouchableOpacity>
    )
}

const doneStyles = StyleSheet.create({
    container: {
        backgroundColor: "#a5d6a7",
        margin: 5,
        padding: 10,
        borderRadius: 30,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 20,
        marginLeft: 10,
        textDecorationLine: 'line-through'
    },
    dot: {
        backgroundColor: 'red',
        width: 10,
        height: 10,
        borderRadius: 10
    }
})

const undoneStyles = StyleSheet.create({
    container: {
        backgroundColor: "#ef9a9a",
        margin: 5,
        padding: 10,
        borderRadius: 30,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 20,
        marginLeft: 10,
        
    },
    dot: {
        backgroundColor: 'red',
        width: 10,
        height: 10,
        borderRadius: 10
    }
})

export { ListItem }