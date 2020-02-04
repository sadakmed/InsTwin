import React from 'react'
import {View,StyleSheet,Text} from 'react-native'





class Profil extends React.Component {
    
  
    render() {
       
        return (
            <View style={s.container}>
            <Text>Profil Screen</Text>
            </View>
        );
    }
  
  }
  

const s=StyleSheet.create({
        container:{
            flex:1,
            alignContent:'center',
            justifyContent:'center',
            alignItems:'center'
        }
});

export default Profil;