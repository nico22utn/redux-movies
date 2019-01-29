import React, { Component } from 'react';
import { View, Alert, StyleSheet , Text } from 'react-native';
import Swipeout from 'react-native-swipeout';

export default class FlatListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
      const swipeSettings = {
        autoClose: true,
        right: [
            {
                onPress: () => {
                    const {movieComponent} = this.props;
                    movieComponent.refs.editModal.showEditModal({...this.props});
                },
                text: 'Edit', type: 'primary'
            },
            {
                onPress: () => {
                    Alert.alert('Alert','Estás seguro de borrar éste ítem?',[
                        {
                            text: 'No', onPress: () => alert("Se canceló la operación"), style: 'cancel'
                        },
                        {
                            text: 'Yes', onPress: () => {
                                const { movieComponent } = this.props;
                                movieComponent.props.onDeleteItemAction(this.props.id);
                            }
                        }
                    ])
                },
                text: 'Delete', type: 'delete'
            }
        ],
        rowId: this.props.id,
        sectionId: 1
      };
    return (
      <Swipeout {...swipeSettings}>
        <View style = {{
            flex: 1
        }}>
            <Text style = {{
                padding: 10,
                fontWeight: 'bold',
                fontSize: 17,
                color: 'white',
                backgroundColor:  (this.props.itemIndex % 2 === 0 ) ? 'dodgerblue' : 'mediumseagreen'
            }}>
                {`${this.props.name}, año de lanzamiento = ${this.props.releaseYear}`}
            </Text>
        </View>
      </Swipeout>
    );
  }
}