import React from 'react'
import {Text} from 'react-native'

export default (props)=>{
    return(
        <React.Fragment>
            <Text>{props.a}</Text>
            <Text>{props.b}</Text>
        </React.Fragment>
    )
}