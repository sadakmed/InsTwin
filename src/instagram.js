import React, {useState} from 'react';
import {View,StyleSheet,Text,Image,Dimensions,TouchableOpacity} from 'react-native'
import {Feeds}  from './components/contrainers/';
import { MainFeeds,Login } from './components/screens';



const Instagram= () => {
    
       
        return (
            <View style={styles.container}>
              <MainFeeds />
            </View>

        );


    }





const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },    
  });
  

export default Instagram;