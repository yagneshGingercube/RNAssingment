import React, {useState} from 'react';
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    FlatList,
    Dimensions,
    TouchableOpacity
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const DashboardPage = ({navigation}) => {

    return (
        <SafeAreaView style = {style.container}>
        <View style = {style.topContainer}>
        <Image source = {require('../assets/ic_splash.png')}
        style = {style.topImageStyle}/>
        <Text style = {style.topTextStyle}> Save Water. {"\n"} Save Life. </Text>
        </View>
        <View style = {style.bottomContainer}>
        <FlatList
        data={MenuData}
        renderItem={({ item }) => (
            <TouchableOpacity>
          <View style={{backgroundColor : '#3cb0bf', height : 150, width : (windowWidth - 40)/2,  flexDirection: 'column', margin: 10, justifyContent : 'center' }}>
            <Text style = {{color : 'white', justifyContent : 'center', alignItems:'center', alignSelf : 'center', fontSize : 30, fontWeight : 'bold'}}>{item.name}</Text>
          </View>
          </TouchableOpacity>
        )}
        //Setting the number of column
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
        </View>
        </SafeAreaView>
        );
        
    }
    
    const MenuData = [
        {'name' : 'PROFILE', 'id' : 1},
        {'name' : 'CART', 'id' : 2},
        {'name' : 'ORDERS', 'id' : 3},
        {'name' : 'ABOUT', 'id' : 4},
        {'name' : 'SETTINGS', 'id' : 5}
    ]
    
    const style =  StyleSheet.create ({
        container : 
        {
            
            flex : 1
        },
        topContainer : 
        {
            
            flex : 0.4,
            justifyContent : 'center',
            alignItems : 'center'
        },
        bottomContainer : 
        {
            flex : 0.6,
            marginTop : 20
        },
        topImageStyle :
        {
            marginTop : 20,
            height : 200,
            width : 200
        },
        topTextStyle : 
        {
            color : 'gray',
            fontWeight : 'bold',
            fontSize : 30,
            textAlign : 'center',
            margin :20
        }
    })
    export default DashboardPage;