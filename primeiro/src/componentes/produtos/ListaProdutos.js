import React from 'react'
import {Text} from 'react-native'
import produtos from './produtos'
export default ()=>{
    return(
        <React.Fragment>
            <Text>Lista de Produtos</Text>
            {produtos.map(p=>{
                return <Text>{p.id} {p.nome} {p.preco}</Text>
            })}
        </React.Fragment>
    )
}