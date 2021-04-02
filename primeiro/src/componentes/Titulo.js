import React from 'react'
import {View,Text} from 'react-native'



export default (props)=>{


    return(
        <React.Fragment>
            <Text>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </React.Fragment>

    )
}