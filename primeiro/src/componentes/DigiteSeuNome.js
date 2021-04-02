import React,{useState} from 'react'
import {View,Text,TextInput} from 'react-native'

export default ()=>{

    let [nome,setNome] = useState('')
    return(
        <View>
            <Text>{nome}</Text>
            <TextInput
            placeholder="Digite seu nome"
            value={nome}
            onChangeText={(nome)=>{
                setNome(nome)
            }}
            >

            </TextInput>
        </View>
    )
}