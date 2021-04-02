import React,{useState} from 'react'
import {Text,Button} from 'react-native'


export default props =>{
    const [numero,setNumero] = useState(props.inicial)


    const inc = ()=> setNumero(numero+props.passo)
    const dec = ()=> setNumero(numero-props.passo)

    return(
        <React.Fragment>
            <Text>{numero}</Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>
        </React.Fragment>
    )
}