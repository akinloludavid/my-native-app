import React from 'react'
import { View, ImageBackground, Button,StyleSheet, Image, Text } from 'react-native'
import { colors } from '../config/colors'

const WelcomeScreen = () => {
    return (
        <ImageBackground source = {require('../assets/background.jpg')} style={welcomeStyles.background}>
            <View style={welcomeStyles.logoContainer}>
                <Image style={welcomeStyles.logoStyles} source={require("../assets/logo-red.png")} />
                <Text>Sell What You Don't Need</Text>
            </View>
            <View style={welcomeStyles.loginButton}>
            </View>
            <View style={welcomeStyles.registerButton}>
            </View>
        </ImageBackground>
    )
}


const welcomeStyles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    loginButton:{
        width:"100%",
        backgroundColor:colors.primary,
        height:70
    },
    registerButton:{
        width:"100%",
        backgroundColor:colors.secondary,
        height:70
    },
    logoContainer: {
        position:"absolute",
        top:70,
        alignItems:'center'
    },
    logoStyles: {
        width:100,
        height:100,
    }
})
export default WelcomeScreen
