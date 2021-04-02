import React, {useState} from 'react'
import {Text} from 'react-native'
import ContadorDisplay from './ContadorDisplay'
import Estilo from './../../Estilo'
import Botoes from  './ContadorBotoes'

export default (props)=>{
    const [num,setNumero] = useState(0)
    const inc = () => setNumero(num+1)
    const dec  = () => setNumero(num-1)
    return(
        <React.Fragment >
            <Text style={Estilo.container} >Conatador</Text>
            <ContadorDisplay num={num}/>
            <Botoes inc={inc} dec={dec}/>
        </React.Fragment>
    )
}


