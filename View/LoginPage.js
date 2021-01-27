import React, {useState} from 'react';
import { 
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity
} from "react-native";

import { CommonActions } from '@react-navigation/native';


const LoginPage = ({navigation}) => {
    
    const [email, setEmail] = useState (null)
    const [password, setPassword] = useState (null)
    
    
    const OnClickLogin = () => {
        if (email.length > 0 && password.length > 0) {
            alert("Welcome to Water Inc.\n Save Water.")
            navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [
                    { name: 'Dashboard' }
                  ],
                })
              );
        }
        else {
            alert("Please check for empty fields")

        }
    }
    
    return (
        <View style = {style.container}>
        <ScrollView>
        <View style = {style.viewBranding}>
        <Image source = {require('../assets/ic_splash.png')}
        style = {style.imageStyle}/>
        </View>
        
        <Text style = {style.loginTxtStyle}> LOGIN </Text>
        
        <View style = {style.viewEntry}> 
        <Image source = {require('../assets/ic_email_1.png')} style = {style.emailPassImgStyle}/>
        <TextInput placeholder = 'Please enter email address'
        style = {style.emailPasswordStyle}
        onChangeText = {(email)=> setEmail(email)}> </TextInput>
        </View>
        
        <View style = {style.viewEntry}> 
        <Image source = {require('../assets/ic_pass_1.png')} style = {style.emailPassImgStyle}/>
        <TextInput style = {style.emailPasswordStyle}
        placeholder = 'Please enter password' 
        secureTextEntry = {true}
        onChangeText = {(pass)=> setPassword(pass)}> 
        </TextInput>
        </View>
        
        <TouchableOpacity style = {style.loginBtnStyle} onPress = {OnClickLogin}>
        <Text style = {style.goTextStyle}> GO </Text>
        </TouchableOpacity>
        </ScrollView>
        </View>
        );
        
    }
    
    const style =   StyleSheet.create({
        container : 
        {
            backgroundColor : 'white',
            height : '100%',
            justifyContent : 'center'
        },
        viewBranding : 
        {
            marginTop  :  120,
            justifyContent : 'center',
            alignItems : 'center',
            backgroundColor : 'white'
        },
        imageStyle :
        {
            height : 200,
            width : 200,
            marginBottom : 40
        },
        viewEntry : 
        {
            backgroundColor : "white",
            height : 52,
            borderRadius : 26,
            borderColor : "#3cb0bf",
            borderWidth : 1,
            flexDirection : "row",
            overflow : "hidden",
            marginTop : 20,
            marginLeft : 50,
            marginRight : 50,
            alignItems : 'center'
        },
        emailPasswordStyle : 
        {
            color : '#3cb0bf',
            marginLeft : 10,
            marginRight : 10,
            fontSize : 18,
            fontWeight : 'bold',
            flex : 1
        }, 
        emailPassImgStyle : 
        {
            height : 20,
            width : 20,
            marginLeft : 20,
            marginRight : 5
        }, 
        loginTxtStyle : 
        {
            fontSize : 30,
            fontWeight : 'bold',
            justifyContent : 'center',
            alignItems : 'center',
            textAlign : 'center',
            marginBottom : 10,
            color : '#3cb0bf',
        },
        loginBtnStyle : {
            marginLeft : 50,
            marginRight : 50,
            marginTop : 30,
            height : 54,
            backgroundColor : '#3cb0bf',
            borderRadius : 27,
            overflow : 'hidden'
        },
        goTextStyle : 
        {
            fontSize : 30,
            fontWeight : 'bold',
            justifyContent : 'center',
            alignItems : 'center',
            textAlign : 'center',
            color : 'white',
            alignSelf : 'center',
            marginTop : 8
            
        }
    })
    
    export default LoginPage;