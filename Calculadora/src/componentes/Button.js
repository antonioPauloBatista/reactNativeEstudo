import React from 'react'
import {Text,StyleSheet,Dimensions,TouchableHighlight} from 'react-native'

const estilo = StyleSheet.create({
    button:{
        fontSize:40,
        height:Dimensions.get('window').height/7,
        width:Dimensions.get('window').width/4,
        backgroundColor:'#f0f0f0',
        textAlign:'center',
        borderWidth:1,
        borderColor:"#888"
    },
    operationButton:{
        color:'#fff',
        backgroundColor:'#fa8231'
    },
    buttonDouble:{
        width:(Dimensions.get('window').width/4)*2
    },
    buttonTriple:{
        width:(Dimensions.get('window').width/4)*3
    }
})

export default (props) =>{

    const estiloButtons =[estilo.button] 
    
    if(props.double){
        estiloButtons.push(estilo.buttonDouble)
    }

    if(props.triple){
        estiloButtons.push(estilo.buttonTriple)
    }

    if(props.operator){
        estiloButtons.push(estilo.operationButton)
    }

    return(
        <TouchableHighlight 
            onPress={()=>props.onClick(props.label)}
        >
            <Text style={estiloButtons}>{props.label}</Text>
        </TouchableHighlight>
    )
}

