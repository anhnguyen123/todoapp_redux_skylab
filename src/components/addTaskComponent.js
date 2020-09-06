import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'

export default class AddTaskComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTaskName: ''
        }
    }
    render() {
        return (
            <View style={{ marginBottom: 10 }}>
                <Text style={styles.headerTitle}> To do app</Text>
                <View style={styles.headerAddBar}>
                    <TextInput placeholder="Task name" style={styles.addBarInput} onChangeText={(text) => {
                        this.setState(() => this.state.inputTaskName = text);
                    }} />
                    <Button style={styles.btnAddTask} title="Add task" onPress={() => {
                        console.log(this.state.inputTaskName);
                        this.props.onClickAdd(this.state.inputTaskName);

                    }} />

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 20,
        color: 'black',
        justifyContent: "center",
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10

    },
    headerAddBar: {
        flexDirection: 'row',
        marginHorizontal: 10
    },
    addBarInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        marginRight: 20,
        // marginVertical: 5,
        padding: 10
    },
    btnAddTask: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        // marginRight:20,

    }
})