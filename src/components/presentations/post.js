
import React, {useState} from 'react';
import {View,StyleSheet,Text,Image,Dimensions,TouchableOpacity} from 'react-native'
import config from '../../config';



const Post= () => {
    
        //var tint;
        const [screenWidth,setScreenWidth] = useState (Dimensions.get("window").width);
        const [isTinted,setTinted]=useState(false);
        const tint= (isTinted)?'red':'black';
        const onTinted = ()=> {setTinted(!isTinted);console.log(tint)};
        return (
              
                <View>
                <View style={styles.userBar}  >
                    <View style={styles.userStuff} >
                        <View><Image style={styles.userImg}  source={{uri:"https://lh3.googleusercontent.com/Y-s44XgewOqcEhpfvvxbxXEDYkhnise-nXIvEypaDP2AUluxeYpJkomc4cN1Ko-xwtgJ0r3OS1kDT_kuvS5c_ymC"} }></Image></View>
                        <View style={{marginLeft:10}}  ><Text>Sadak Simo</Text></View>
        			</View>
                    <View  style={{marginRight:10,alignItems:'center'}}  ><Text style={{fontSize:30}}  >...</Text></View>
                </View>

                <TouchableOpacity onPress={onTinted} style={{width:screenWidth,height:Math.floor(screenWidth*1.1)}} >
                    <Image style={styles.img}  source={{uri:"https://lh3.googleusercontent.com/kwTwujT_R7ESAV56o_sU_CzWc1s8O1RkQVydqFkjtIVh-t2hsWl8MN0NWftsbCztYwYGgyqpUHZ_y6XMsFDhYZQwtBE"+"=s"+Math.floor(screenWidth*1.1) +"-c" } }/>
                </TouchableOpacity>
                
                <View  style={styles.iconBar} > 
                    <Image style={{margin:5, tintColor:tint}} source={config.images.heartIcon} ></Image>
                    <Image style={{margin:5, }} source={config.images.bubbleIcon} ></Image>
                    <Image style={{margin:5, }} source={config.images.arrowIcon} ></Image>
                </View>
                <View style={styles.likesBar} >
                    <Image  style={{margin:5,tintColor:tint,width:20,height:20}} source={config.images.heartIcon} ></Image>
                    <Text>120 Likes</Text>
                </View>
            </View>

        );


    }





const styles = StyleSheet.create({
    container:	{
		flex: 1,
		backgroundColor: '#fff',},
    mainView:	{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',},
	userBar:	{
		height:55,
		borderTopWidth:StyleSheet.hairlineWidth,
		borderColor:'rgb(235,235,235)',
		flexDirection:'row',
		justifyContent:'space-between'},
	userStuff:	{
		flexDirection:'row',
		alignItems:'center'},
	userImg:	{
		marginLeft:5,
		width:40,
		height:40,
		borderRadius:20},
	img:		{
		width:100+"%",
		height:100+"%"},
	iconBar:	{
		width:100+"%" ,
		height:50,
		borderTopWidth:StyleSheet.hairlineWidth,
		borderBottomWidth:StyleSheet.hairlineWidth,
		borderColor:'rgb(245,245,245)',
		flexDirection:'row',
		alignItems:'center'},

	likesBar:{ 
		flexDirection:'row',
		alignItems:'center'}
  });
  

export default Post;