import React, { Component } from 'react';
import { TextInput, StyleSheet,View, Text, Dimensions } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button'; 

var screen = Dimensions.get('window');

export default class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: '',
        name: '',
        releaseYear: ''
    };
  }
  showEditModal = (item) => {
      this.setState({
          id: item.id.toString(),
          name: item.name,
          releaseYear: item.releaseYear
      });
      this.refs.myModal.open();
  }
  render() {
    return (
      <Modal
        ref = {"myModal"}
        style = {styles.modalStyle}
        position = "center"
        backdrop = {true}
        onClosed = { () => {

        }}>
        <Text style = {styles.textModalStyle}>Información de la película</Text>
        <TextInput 
            style = {styles.inputModalStyle}
            onChangeText = {(text) => this.setState({ name: text})}
            placeholder = "Nombre de la película"
            value = {this.state.name}/>
        <TextInput 
            style = {styles.inputModalStyle}
            onChangeText = {(text) => this.setState({ releaseYear: text})}
            placeholder = "Año de lanzamiento"
            value = {this.state.releaseYear}/>
        <Button
            style = {{ fontSize: 10, color: 'white'}}
            containerStyle = {{ padding: 8, marginLeft: 70, marginRight: 70, height: 40, borderRadius: 6,backgroundColor: 'mediumseagreen'}}
            onPress = {()=>{
                if (this.state.name.length === 0 || this.state.releaseYear.length == 0){
                    alert("Tienes que completar ambos campos.");
                    return;
                }
                this.props.movieComponent.props.onUpdateItemAction(this.state);
                this.refs.myModal.close();
            }}>
            Guardar
        </Button>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
    modalStyle: {justifyContent: 'center', borderRadius: 0, shadowRadius: 10, width: screen.width - 80,height: 200},
    textModalStyle: {fontSize:10,fontWeight: 'bold',textAlign: 'center',marginTop: 40},
    inputModalStyle: {height: 40,borderBottomColor: 'gray', marginLeft: 30, marginRight: 30, marginTop: 20,marginBottom: 10,borderBottomWidth: 1}

})