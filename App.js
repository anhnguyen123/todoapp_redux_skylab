import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import AddTaskComponent from './src/components/addTaskComponent'
import ListTaskComponent from './src/components/listTaskComponent'
import { createStore } from 'redux'
import allReducer from './src/reducers/index'
import { Provider } from 'react-redux'
import AddTaskContainer from './src/containers/addTaskContainer'
import TaskListContainer from './src/containers/taskListContainer'
const store = createStore(
  allReducer
);
export default class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      tasks: [{
        taskName: "item 1",
        taskId: 1
      },
      {
        taskName: "item 2",
        taskId: 2
      },
      {
        taskName: "item 3",
        taskId: 3
      }]


    }
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <AddTaskContainer />
          <TaskListContainer/>
          {/* <ListTaskComponent tasks={this.state.tasks} /> */}
        </View>
      </Provider>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})
