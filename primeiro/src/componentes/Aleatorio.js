import React from 'react'
import {Text} from 'react-native'


export default (props)=>{
    return(
        <Text> O valor aleatorio entre {props.min} e {props.max} : 
         {parseInt(randomInterval(props.min,props.max))}</Text>
    )
}

function randomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

