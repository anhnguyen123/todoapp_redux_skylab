import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import TaskItemComponent from './taskItemComponent'
import TaskItemContainer from '../containers/taskItemContainer'

export default class ListTaskComponent extends Component {
    // constructor(){
    //     super(props);
    // }
    render() {
        return (
            // <View></View>
            <FlatList style={{ backgroundColor: 'green' }} data={this.props.tasks}
                renderItem={({ item, index }) => {
                    return (
                        // <TaskItemComponent {...item} index={index} />
                        <TaskItemContainer {...item} />

                    )
                }}
                keyExtractor={(item, index) => item.taskId.toString()}
                key={(item) => item.taskId}
            >

            </FlatList>
        )
    }
}
