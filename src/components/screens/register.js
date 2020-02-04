import React from 'react'
import {View,StyleSheet,Button,TextInput,Text, TouchableOpacity} from 'react-native'





class Register extends React.Component {
    
  
    render() {
        const navLg =  ()=>this.props.navigation.navigate("main");
        const navRg =  ()=>this.props.navigation.navigate("login");
        return (
            <View style={s.container}>
                <View style={{width:90+"%"}}>
                    <View style={{width:100+"%",marginBottom:10,borderBottomWidth:StyleSheet.hairlineWidth,borderBottomColor:'rgb(230,230,230)'}}>
                        <TextInput placeholder="Tap your username.."   /> 
                    </View>
                    <View style={{width:100+"%",marginBottom:10,borderBottomWidth:StyleSheet.hairlineWidth,borderBottomColor:'rgb(230,230,230)'}}>
                        <TextInput  secureTextEntry placeholder="Tap your password.."   /> 
                    </View>
                    <View style={{justifyContent:"center",alignItems:'center'}} >
                        <Button style={{borderWidth:0}} title="Sign up" onPress={navLg} />
                    </View>
                </View>
                <View  style={{flexDirection:'row',justifyContent:'center'}}>
                    <View >
                        <Text>You Already Have An Account?</Text>
                    </View>
                    
                    <TouchableOpacity onPress={navRg} >
                        <Text style={{ color:'blue',marginLeft:3}}  >Sign in</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        );
    }
  
  }
  

const s=StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignContent:'center',
            alignItems:"center",
            
            
        }
});

export default Register;