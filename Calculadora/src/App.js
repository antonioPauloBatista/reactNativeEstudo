import React, {useState} from 'react'
import {View,StyleSheet,Text} from 'react-native'
import Button from './componentes/Button'
import Display from './componentes/Display'



const estilo = StyleSheet.create({
    container: {
        flex:1,
    },
    buttons:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    display:{
        height:300
    }
})



class App extends React.Component{

    state = {
        displayValue:'',
        operation:"",
        memory : [0,0],
        calculate:false
    }

    adicionaDigito = (n)=>{

        if(this.state.calculate == false){
            this.setState({
                displayValue:''
            })
        }

        if (this.state.displayValue.toString().length <10){
            if(n === '.' ){
                if(this.state.displayValue.toString().indexOf('.') < 0){

                    if(this.state.calculate == false){
                        this.setState({
                            displayValue:`${n}`
                        })
                    }else{
                        this.setState({
                            displayValue:`${this.state.displayValue}${n}`
                        })
                    }
                }
       
            }else{

                if(this.state.calculate == false){
                    this.setState({
                        displayValue:`${n}`
                    })
                }else{
                    this.setState({
                        displayValue:`${this.state.displayValue}${n}`
                    })
                }
            }

            this.setState({
                calculate:true
            })
    
        }

  
    }
    
    clearMemory = ()=>{
        this.setState({
            displayValue:0,
            operation:'',
            memory:[0,0],
            calculate:false
        })
    }

    calculate(op){
        let temp = this.state.memory 
        let tempOp
        if(this.state.calculate || op == '='){                    
            if(this.state.memory[0] == 0 ){                    
                temp[0] = parseFloat(this.state.displayValue.toString())
                this.setState({
                    memory:temp,
                    displayValue:temp[0],
                    calculate:false,
                    operation:op
                })
            }else{
  
                if(op =='='){
                    tempOp = this.state.operation 

                }else{
                    tempOp = op
                    
                }
                
                temp[1] = parseFloat(this.state.displayValue.toString())
                switch(tempOp){
                    case '+':
                        temp[0] = temp[0]+temp[1]
                        break;
                    case '-':
                        temp[0] = temp[0]-temp[1]
                        break;
                    case '*':
                        temp[0] = temp[0]*temp[1]
                        break;
                    case '/':
                        temp[0] = temp[0]/temp[1]
                        break;
                                             
                }
                console.log(this.state.memory,this.state.operation)
                this.setState({
                    memory:temp,
                    displayValue:temp[0],
                    calculate:false,
                    operation:tempOp
                })
                
                
            }
        }else{
            this.setState({
                operation:op
            })
        }
    }
    
    setOperator = (op) =>{
        let temp = this.state.memory

        switch (op){
            case '+':
                this.calculate('+')
                break;
            case '-':
                this.calculate('-')
                break;
            case '*':
                this.calculate('*')
                break;
            case '/':
                this.calculate('/')
                break;
            case '=':
                this.calculate('=')        
                break;


        }
  
    }
    

    render(){
        return(
            <View style={estilo.container}>
                <Display style={estilo.display} value={this.state.displayValue}/>
                <View style={estilo.buttons}>
                    <Button label='AC' triple onClick={this.clearMemory}/>
                    <Button label='/' operator onClick={this.setOperator}/>
                    <Button label='7' onClick={this.adicionaDigito}/>
                    <Button label='8' onClick={this.adicionaDigito}/>
                    <Button label='9' onClick={this.adicionaDigito}/>
                    <Button label='*' operator onClick={this.setOperator}/>
                    <Button label='4' onClick={this.adicionaDigito}/>
                    <Button label='5' onClick={this.adicionaDigito}/>
                    <Button label='6' onClick={this.adicionaDigito}/>
                    <Button label='-' operator onClick={this.setOperator}/>
                    <Button label='1' onClick={this.adicionaDigito}/>
                    <Button label='2' onClick={this.adicionaDigito}/>
                    <Button label='3' onClick={this.adicionaDigito}/>
                    <Button label='+' onClick={this.setOperator} operator/>
                    <Button label='0' double onClick={this.adicionaDigito}/>
                    <Button label='.' onClick={this.adicionaDigito}/>
                    <Button label='=' onClick={this.setOperator} operator />
                </View>
            </View>
    
        )
    }

 
}

export default App;