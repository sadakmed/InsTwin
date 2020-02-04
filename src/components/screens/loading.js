import React, { useState } from 'react'
import {View,StyleSheet,Text, ActivityIndicator} from 'react-native'

import {f,fAuth} from '../../config'




class Loading extends React.Component {
    state={
      userState:'ha'
    }  


    componentDidMount(){
      f.auth().onAuthStateChanged(user=>this.setState({ userState: user },
                       () => this.props.navigation.navigate(this.state.userState===null?'auth':'main')))     
    }
  
    render() {
       
        return (
            
            <View style={s.container}>
            <Text>Loading {this.state.userState} </Text>
            <ActivityIndicator size="large"></ActivityIndicator>
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

export default Loading;