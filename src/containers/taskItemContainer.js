import { connect } from 'react-redux'
import TaskItemComponent from '../components/taskItemComponent'
import {deleteTaskAction,finishTaskAction} from '../actions/actionTypes';
const mapStateToProps = state => {
    //console.log(state)
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {
        onClickDelete(taskId) {
            dispatch(deleteTaskAction(taskId));
        },
        onClickFinish(taskId) {
            dispatch(finishTaskAction(taskId));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskItemComponent);