import React, { Component } from 'react'
import { Text, FlatList , View, StyleSheet, TextInput } from 'react-native'
import Button from 'react-native-button'

export default class MovieComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            newMovie: null,
            releaseYear: null
        }
    }
    render() {
        return (
        <View style = {styles.containerStyle}>
            <Text style = {styles.headerStyle}> Movie App With Redux - Sagas </Text>
            <Text style = {styles.secondHeaderStyle}>
                Ingrese datos de la nueva pelicula
            </Text>
            <View style = {styles.contentStyle}>
                <TextInput style = {styles.firstInputStyle}
                    onChangeText = { (text) => this.setState({ movieName: text})} 
                    value = { this.state.movieName}
                    placeholder = "Nueva película"/>
                <TextInput style = { styles.secondInputStyle} 
                    onChangeText = { (text) => this.setState({ releaseYear: text})}
                    value = { this.state.releaseYear}
                    placeholder = "Año Lanzamiento"/>
            </View>
            <View style = {styles.contentButtonStyle}>
                <Button style = { styles.secondButtonStyle} 
                    containerStyle = {{
                        padding: 10,
                        margin: 10,
                        width: 150,
                        height: 45,
                        borderRadius: 10,
                        backgroundColor: 'darkviolet'
                    }}
                    onPress = { () => {
                        this.props.onFetchMovies('asc');
                    }}>
                    Buscar movies</Button>
                <Button style = {styles.secondButtonStyle} 
                    containerStyle = { {
                        padding: 10,
                        margin: 10,
                        width: 150,
                        height: 45,
                        borderRadius: 10,
                        backgroundColor: 'darkviolet'
                    }}
                    onPress = { () => {
                        
                    }}>
                    Añadir película</Button>
            </View>
            <FlatList data = { this.props.movies}
                keyExtractor = { (item) => item.name}
                renderItem = { ({item,index}) => 
                    <Text style = { {
                        padding: 10,
                        fontWeight: 'bold',
                        fontSize: 17,
                        color: 'white',
                        backgroundColor: ( index % 2 === 0) ? 'dodgerblue' : 'mediumseagreen'
                    }}>{`${item.name}, Año Lanzamiento: ${item.releaseYear}`}</Text>
                }/>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        marginTop: 20,
    },
    headerStyle: {
        fontWeight: 'bold',
        color: 'forestgreen',
        fontSize: 20,
    },
    secondHeaderStyle: {
        margin: 10,
        color: 'black',
        fontSize: 20
    },
    contentStyle : {
        height: 100, 
        margin: 5
    },
    contentButtonStyle: {
        height: 70,
        flexDirection: 'row',
    },
    firstInputStyle: {
        flex: 1,
        margin: 5,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
    },
    secondInputStyle: {
        flex: 1,
        margin: 5,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        width: 120
    },
    firstButtonStyle: {
        fontSize: 10,
        color: 'white'
    },
    secondButtonStyle: {
        fontSize: 18,
        color: 'white'
    },
    secondButtonContainerStyle: {
        padding: 10,
        margin: 10,
        width: 150,
        height: 45,
        borderRadius: 10,
        backgroundColor: 'darkviolet'
    }
})