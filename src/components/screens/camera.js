import React from 'react'
import {View,StyleSheet,Text} from 'react-native'





class Camera extends React.Component {
    
  
    render() {
       
        return (
            
            <View style={s.container}>
            <Text>Camera Screen</Text>
            </View>
        );
    }
  
  }
  

const s=StyleSheet.create({
        container:{
            flex:1,
            alignContent:'center',
            alignItems:'center',
            justifyContent:'center',
        }
});

export default Camera;