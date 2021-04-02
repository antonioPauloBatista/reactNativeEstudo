import React from 'react'
import {View,StyleSheet} from 'react-native'
import Quadrado from './Quadrado'
export default ()=>{
    return(
        <View style={style.flexV1}>
                        <View style={style.v0}>

</View>
            <View style={style.v1}>

            </View>

            <View style={style.v2}>


            </View>
        </View>
    )
}

const style = StyleSheet.create({
    flexV1:{
        flexGrow:1,
        width:100,
        flexDirection: 'column',
        justifyContent:'center',
        backgroundColor:'#000',
    },
    v0:{
        backgroundColor:'#ff839a',
        height:300,
    },
    v1:{
        flexGrow:5,
        backgroundColor:'#ff801a'
    },
    v2:{
        flexGrow:10,
        backgroundColor:'#dd22c1'
    }
})