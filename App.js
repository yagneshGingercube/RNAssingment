/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashPage from './View/SplashPage';
import LoginPage from './View/LoginPage';
import DashboardPage from './View/DashboardPage';


const Stack = createStackNavigator()


const App = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name='Splash'
        component={SplashPage}
        options = {{
            headerShown : false                
        }}/>
        <Stack.Screen name='Login'
        component={LoginPage}
        options = {{
            headerShown : false                
        }}/>
        <Stack.Screen name='Dashboard'
        component={DashboardPage}
        
        options = {{
            headerShown : true ,
            headerTintColor : 'white',
            headerStyle : {
                backgroundColor : '#3cb0bf'
            }               
        }}/>
        </Stack.Navigator>
        </NavigationContainer>
        );
    }
    export default App;
    