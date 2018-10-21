import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DialogV from "react-native-dialog";

export default class DialogView extends Component {
    constructor (props) {
        super(props)
        this.state = {
             dialogVisible: false
        };
    }

  handleCancel = () => {
    this.setState({ dialogVisible: this.props.isVisible });
  };

  handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    this.setState({ dialogVisible: this.props.isVisible });
  };

  render() {
    return (
      <View>
         <DialogV.Container  visible={this.props.isVisible}>
          <DialogV.Title>Account delete</DialogV.Title>
          <DialogV.Description>
            Do you want to delete this account? You cannot undo this action.
          </DialogV.Description>
          <DialogV.Button label="Cancel" onPress={this.handleCancel} />
          <DialogV.Button label="Delete" onPress={this.handleDelete} />
        </DialogV.Container>
      </View>
    );
  }
}