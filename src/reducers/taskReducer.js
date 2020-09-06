const { ADD_TASK, FINISH_TASK, DELETE_TASK } = require("../actions/actionTypes");

const taskReducer = (task = [], action) => {
    let newTaskList = task;
    switch (action.type) {
        case ADD_TASK:
            return [
                ...task,
                {
                    taskId: action.taskId,
                    taskName: action.taskName,
                    completed: false
                }
            ]


        case DELETE_TASK:
            newTaskList = task.filter((item, i) => i !== action.taskId);
            return [
                ...task,
                newTaskList
            ]

        case FINISH_TASK:

            newTaskList[action.taskId].completed = true;
            return [...task, newTaskList];

    }
    return task;
}
export default taskReducer;