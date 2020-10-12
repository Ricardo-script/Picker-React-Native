import React, { Component } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { Picker } from '@react-native-community/picker';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            img: require('./assets/pizz.png'),
            posicao:0,
            pizzas:[
                {id: 1, sabor:'Calabreza', valor: 35.50},
                {id: 2, sabor:'Quatro-queijos', valor: 40.50},
                {id: 3, sabor:'Frango', valor: 37.90},
                {id: 4, sabor:'Strognoff', valor: 41.30},
                {id: 5, sabor:'Tropicana', valor: 37.70},
                {id: 6, sabor:'Brigadeiro', valor: 45.20},
                {id: 7, sabor:'Morango', valor: 45.20},
                {id: 8, sabor:'Meio a Meio', valor: 30.20},
            ]
            
        }
    }

    render(){

        let itens = this.state.pizzas.map((v,k) =>{
            return <Picker.Item  key={k} label={v.sabor} value={k}/>
        })

        return(
            <View style={styles.container}>
                <Text style={styles.logo}>Menu Pizzas</Text>
                <Text style={styles.escolha}>Escolha o sabor:</Text>
                <Picker
                    style={styles.pick}
                    selectedValue={this.state.posicao}
                    onValueChange={ (itemValue,itemIndex) => this.setState({posicao: itemValue})}
                >
                 {itens}   
                </Picker>
                <View style={styles.total}>
                    <Text style={styles.opcao}>Sabor escolhido: {this.state.pizzas[this.state.posicao].sabor}</Text>
                    <Text style={styles.opcao}>Valor Total: R$ {this.state.pizzas[this.state.posicao].valor.toFixed(2)} reais</Text>
                </View>

                <Image style={styles.marca}source={this.state.img}/>
                <Text style={styles.escolha}>Pizzaria´s Dona Neves</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 25,
        backgroundColor:'#6E6E6E'
    },
    logo:{
        textAlign:'center',
        backgroundColor:'purple',
        color:'#FFF',
        padding:30,
        fontSize: 25,
    },
    escolha:{
        fontSize:20,
        fontStyle:'italic',
        marginTop: 30,
        marginBottom:30,
        color:'#FFF',
    },
    pick:{
     marginBottom:25,
     color:'#FFF',
     width: 300,
    },
    opcao:{
        fontSize: 25,
        margin:4,
        color:'#FFF',
    },
    total:{
        marginLeft:5,
        color:'#FFF',
    },
    marca:{
        marginLeft:50,
    },

});