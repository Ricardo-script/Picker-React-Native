import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            valor:0
        }
    }

    //Slider possui algumas propriedades:
    //minimunValue,maximumValue, 
    //onValueChange = pega o valor e insere dentro da state
    //value = é o valor atual 

    render(){
        return(
            <View style={styles.container}>

                <Slider
                    minimumValue={0}
                    maximumValue={100}
                    onValueChange={(valorSelecionado) => this.setState({valor: valorSelecionado})}
                    value={this.state.valor}

                    minimumTrackTintColor="blue"
                    maximumTrackTintColor="#FF0000"
                />

                <Text style={{textAlign: 'center', fontSize: 30 }}>
                    {this.state.valor.toFixed(0)}
                </Text>

                <Text style={styles.resultado}>
                    O Dobro é {this.state.valor.toFixed(0) * 2}
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 45,
    },
    resultado:{
        marginTop:50,
        marginLeft:20,
        fontSize:20,
        color:'blue',
    },
});

export default App;