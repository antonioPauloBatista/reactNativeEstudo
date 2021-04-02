import React from 'react'
import {Button,View,StyleSheet} from 'react-native'

const eBtn = StyleSheet.create({
    container:{
        flexDirection:'row',
        
    }
})
export default (props)=>{
    return(
        <View style={eBtn.container}>
            <Button title='+' onPress={props.inc}/>
            <Button title='-' onPress={props.dec}/>
        </View>

    )
}