import React from 'react'
import {FlatList } from 'react-native'
import Post from '../presentations/post'


const Feeds = (props)=>{
    

const dat =[1,2,3,4,5,6,7,8,9]

    return(
        <FlatList data={dat} keyExtractor={(item)=>item.toString()}  renderItem= {(item)=> <Post id={item.toString()} /> }/>
        
    );


}

export default Feeds;