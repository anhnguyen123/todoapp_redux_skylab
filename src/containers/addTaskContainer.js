import { connect } from 'react-redux';
import { addTaskAction, deleteTaskAction, finishTaskAction } from '../actions/actionTypes';
import AddTaskComponent from '../components/addTaskComponent';

const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {
        onClickAdd(inputTaskName) {
            dispatch(addTaskAction(inputTaskName));
        },
        // onClickDelete(taskId) {
        //     dispatch(deleteTaskAction(taskId));
        // },
        // onClickFinish(taskId) {
        //     dispatch(finishTaskAction(taskId));
        // }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTaskComponent);