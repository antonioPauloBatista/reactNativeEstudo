import React from 'react'
import {Text} from 'react-native'
import If from './If'
export default (props)=>{
    const usuario = props.usuario || {}
    return(
        <If teste={usuario && usuario.email && usuario.nome}>
            <React.Fragment>
                <Text> Usuario Logado :</Text>
                <Text>
                    {usuario.nome} - {usuario.email}
                </Text>
            </React.Fragment>

        </If>

    )
}