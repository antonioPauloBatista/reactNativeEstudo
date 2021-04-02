import React from 'react'
import {View,StyleSheet} from 'react-native'
import Quadrado from './Quadrado'
export default ()=>{
    return(
        <View style={style.flexV1}>
             <Quadrado></Quadrado>
             <Quadrado color="#f00"></Quadrado>
             <Quadrado color="#0f0"></Quadrado>
             <Quadrado color="#00f"></Quadrado>
             <Quadrado color="#009"></Quadrado>
        </View>
    )
}

const style = StyleSheet.create({
    flexV1:{
        width:'100%',
        flex:1,
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor:'#950',
    }
})