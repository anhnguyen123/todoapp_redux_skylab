import { connect } from 'react-redux'
import ListTaskComponent from '../components/listTaskComponent';

const mapStateToProps = (state) => {
    console.log("--------------------------------------");
    console.log(state);
    return {
        tasks: state.TaskReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListTaskComponent);