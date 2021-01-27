import React, { useEffect } from 'react';
import { CommonActions } from '@react-navigation/native';

import {
    View,
    Text,
    Image,
    StyleSheet
}from 'react-native';

const SplashPage = ({navigation}) => {

    useEffect (() => {
        setTimeout (()=> {
            navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [
                    { name: 'Login' }
                  ],
                })
              );
        }, 2000);
    }, []);


    return (
        <View style = {style.container}>
            <Image source = {require('../assets/ic_splash.png')}
                   style = {style.imageStyle}/>
            <Text style = {style.textStyle}> © Water Inc. </Text>
        </View>
    );
}

const style = StyleSheet.create({
    container : 
    {
        backgroundColor : 'white',
        height : '100%',
        justifyContent : 'center',
        alignItems : 'center'
    },
    imageStyle :
    {
        height : 200,
        width : 200
    },
    textStyle : 
    {
        color : 'gray',
        fontWeight : 'bold',
        fontSize : 30,
        textAlign : 'center',
        margin : 40
    }
})
export default SplashPage;