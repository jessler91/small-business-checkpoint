import { connect } from 'react-redux'
import Login from '../components/Login'


const mapStateToProps = (state) => {
    console.log(state);
    return {
        user: state.user,
        listings: state.listings
    }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
    return {
        // removeBusiness: (index) => dispatch(removeBusiness(index))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)