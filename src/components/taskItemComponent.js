import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native'

export default class TaskItemComponent extends Component {
    render() {
        return (
            <View style={style.container}>
                <TouchableOpacity style={{ marginTop: -2 }} onPress={(event) => {
                    this.props.onClickFinish(this.props.taskId);
                 }}>
                    <Text> {`✅`} </Text>
                    {/* <Text> {(item.isFinished) ? `✅` : `🕘`} </Text> */}
                </TouchableOpacity>
                <Text >{this.props.taskId}. </Text>
                <Text style={{ flex: 1 }}>{this.props.taskName} </Text>
                <View style={{ justifyContent: 'center' }}>
                    <TouchableOpacity style={{ marginTop: -2 }} onPress={(event) => {
                        this.props.onClickDelete(this.props.taskId);
                     }}>
                        <Text>{`❌`}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 20,
        paddingVertical: 20,
        // padding: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 5
    }
})
