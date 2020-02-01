import React, {useState} from 'react';
import {View,StyleSheet,Text,Image,Dimensions,TouchableOpacity} from 'react-native'
import {Feeds}  from './components/contrainers/';



const Instagram= () => {
    
       
        return (
            <View style={styles.container}>
                <View  style={styles.upBar}  >
                    <Text>Instagram</Text>
                </View>
                <Feeds/>
            </View>

        );


    }





const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    upBar: {
        backgroundColor:'rgb(250,250,250)',
        alignItems:'center',
        justifyContent:'center',
        marginTop:15, height:45,
        borderBottomWidth:StyleSheet.hairlineWidth  
    },
  });
  

export default Instagram;