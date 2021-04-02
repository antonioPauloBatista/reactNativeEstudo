import React from 'react'
import {Text,TextInput,Button,StyleSheet, View} from 'react-native'
import Numero from './MegaNumero'


export default class Mega extends React.Component{

  
    state = {
            quantidadeNumeros:parseInt(this.props.quantidadeNumeros),
            numeros: []
        }

    gerarNumeroNaoContido = (arr) => {

        let lock = 1
        let numeroNovo
        while(lock){
            numeroNovo = parseInt(Math.random()*60+1)
            if(arr.includes(numeroNovo) === false) lock = 0
        }

        return numeroNovo
    }   

    geraNumeros = ()=>{
        let arr = []
        let temp
        const localNumero = +this.state.quantidadeNumeros
 
        for(let i=0;i<localNumero;i++){
            temp = this.gerarNumeroNaoContido(arr)
            arr.push(temp)
        }

        this.setState({
            numeros:arr
        })

    }

    renderizaNumeros = () =>{

        const tempNum = this.state.numeros

        const out = tempNum.map((numero)=>{
            return <Numero num={numero}/>
        })
  
        return out
    }

    alteraQuantidadeNumero = (qtde)=>{
        let qt =  parseInt(qtde) || 0

        if(qt < 0) qt = 0
        if(qt > 60) qt = 60

        this.setState({
            quantidadeNumeros: qt
        })
    }

    render() {
        return(
            <React.Fragment >
                <Text>
                    Gerador de Mega Sena {this.state.quantidadeNumeros}
                </Text>

                <TextInput
                keyboardType={'numeric'}
                style={{borderBottomWidth:1}}
                placeholder="Quantidade numeros"
                value={`${this.state.quantidadeNumeros}`}
                onChangeText={texto => this.alteraQuantidadeNumero(texto)}
                ></TextInput>
                
                <Button title="Gerar N" 
                onPress={this.geraNumeros}/>
                <View style={{
                    flex:1,
                    flexDirection:"row",
                    flexWrap:'wrap',
                    backgroundColor:"orange",
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    {this.renderizaNumeros()}
                </View>
                
                {/* <Text>Total : {this.state.numeros.join(' , ')}</Text> */}
            </React.Fragment>
        )
    }
}