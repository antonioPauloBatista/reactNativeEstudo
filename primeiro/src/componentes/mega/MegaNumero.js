import React from 'react'
import { Text,StyleSheet,View } from 'react-native'

export default (props)=>{
    return(
        <View style={estilo.container}>
            <Text style={estilo.Num}>{props.num}</Text>
        </View>
    )
}



const estilo = StyleSheet.create({

    container: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor:'#000',
        margin:5,
        alignItems:'center',
        justifyContent:'center',
    },
    Num:{
        color:'#fff',
        fontSize: 20,
    }
})