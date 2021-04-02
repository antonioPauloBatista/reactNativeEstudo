import React,{useState} from 'react'
import {Text} from 'react-native'
import Filho from './Filho'

export default ()=>{
    const [num,setNum] = useState(0)

    function exeibirValor(numero){
        setNum(numero)
    }
    return(
        <React.Fragment>
            <Text>{num}</Text>
            <Filho min={1} max={6000} func={exeibirValor}></Filho>
        </React.Fragment>
    )
}