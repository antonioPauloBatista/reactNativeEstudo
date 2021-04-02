import React from 'react'
import {Text} from 'react-native'
import Filho from './Filhos'

export default ()=>{
    let x = 13
    let y = 100
    return(
        <React.Fragment>
            <Filho a={x} b={y}/>
            <Filho a={x+100} b={y+200}/>
        </React.Fragment>
    )
}