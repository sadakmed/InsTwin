import React, { useState } from 'react'
import {View,StyleSheet,Button,TextInput,Text, TouchableOpacity} from 'react-native'
import { fAuth } from '../../config';







class Login extends React.Component {
    
    state={
        email:"",
        password:"",
        errorMsg:null,
    }

    // nav = () => this.props.navigation.navigate('main');
    login (){
        console.log('object');
        console.log(this.state.email);
        console.log(this.state.password);

        const au=fAuth.signInWithEmailAndPassword(this.state.email,this.state.password).catch(errot=>this.setState({errorMsg:errot.message}))
        console.log(au);
    }
  
    render() {

        const navRg =  ()=>this.props.navigation.navigate("register");
        
        return (
            <View style={s.container}>
                <View  >
                    { this.state.errorMsg &&  <Text style={{ color:'red' }}>{this.state.errorMsg}</Text>}
                </View>
                <View style={{width:90+"%"}}>
                    <View style={{width:100+"%",marginBottom:10,borderBottomWidth:StyleSheet.hairlineWidth,borderBottomColor:'rgb(230,230,230)'}}>
                        <TextInput value={this.state.email} placeholder="Tap your username.."  onChangeText={(email)=> this.setState({email}) }  /> 
                    </View>
                    <View style={{width:100+"%",marginBottom:10,borderBottomWidth:StyleSheet.hairlineWidth,borderBottomColor:'rgb(230,230,230)'}}>
                        <TextInput value={this.state.password} secureTextEntry placeholder="Tap your password.."  onChangeText={(password)=> this.setState({password}) }  /> 
                    </View>
                    <View style={{justifyContent:"center",alignItems:'center'}} >
                        <Button style={{borderWidth:0}} title="Sign in" onPress={this.login()} />
                    </View>
                </View>
                <View  style={{flexDirection:'row',justifyContent:'center'}}>
                    <View >
                        <Text>You Don't Have An Account?</Text>
                    </View>
                    
                    <TouchableOpacity onPress={navRg} >
                        <Text style={{ color:'blue',marginLeft:3}}  >Sign up</Text>
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

export default Login;