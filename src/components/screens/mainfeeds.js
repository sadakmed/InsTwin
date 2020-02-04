import React from 'react';
import {View,StyleSheet,Text,Image,Dimensions,TouchableOpacity} from 'react-native'
import {Feeds}  from '../contrainers';
import * as firebase from 'firebase';



class MainFeeds extends React.Component{
    state={
        displayName:"",
        email:"",
    }

    
    signOut = ()=>firebase.auth().signOut();

    render(){
        return (
            <View style={styles.container}>
                <View  style={styles.upBar}  >
                <Text>{this.state.displayName}</Text>
                </View>
                <Feeds/>
            </View>

        );
    }



}







const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    upBar: {
        backgroundColor:'rgb(250,250,250)',
        borderTopWidth:StyleSheet.hairlineWidth,
		borderColor:'rgb(235,235,235)',
        alignItems:'center',
        justifyContent:'center',
        marginTop:15, height:45,
        //borderBottomWidth:StyleSheet.hairlineWidth  
    },
  });
  

export default MainFeeds;