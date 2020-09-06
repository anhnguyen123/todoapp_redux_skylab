const ADD_TASK = 'ADD_TASK';
const FINISH_TASK = 'FINISH_TASK';
const DELETE_TASK = 'DELETE_TASK';
let initTaskID = 0;
const addTaskAction = (inputTaskName) => {
    return {
        type: ADD_TASK,
        taskId: initTaskID++,
        taskName: inputTaskName,
        completed: false
    }
}
const finishTaskAction = (taskId) => {
    return {
        type: FINISH_TASK,
        taskId
    }
}
const deleteTaskAction = (taskId) => {
    return {
        type: DELETE_TASK,
        taskId
    }
}
export { ADD_TASK, FINISH_TASK, DELETE_TASK, addTaskAction, finishTaskAction, deleteTaskAction };