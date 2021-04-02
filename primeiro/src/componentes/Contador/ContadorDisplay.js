import React from 'react'
import {Text,View,StyleSheet} from 'react-native'

const estilo = StyleSheet.create({
    display:{
        backgroundColor:'#000',
        fontSize:40,
        padding:20,
    },
    displayText:{
        color:'#fff'
    }
})
export default (porps)=>{

    return(
        <View style={estilo.display}>
            <Text style={estilo.displayText}>{porps.num}</Text>
        </View>
    )
}