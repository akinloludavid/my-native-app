import React from 'react'
import { Image, StyleSheet, Button, View, Platform } from 'react-native'
import { colors } from '../config/colors'

const ViewImage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <View style={styles.closeButton}></View>
                <View style={styles.deleteButton}></View>
            </View>
            <Image resizeMode='contain' style ={styles.image} source={require("../assets/chair.jpg")}/>
        </View>
    )
}

export default ViewImage

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.black
    },
    image :{
        width:"100%",
        height:"100%"
    },
    buttons: {
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:20,
        paddingTop: Platform.OS === "android" ? 20 : 0
    },
    closeButton: {
        width:50,
        height:50,
        backgroundColor:colors.primary
    },
    deleteButton: {
        width:50,
        height:50,
        backgroundColor:colors.secondary
    },

})
