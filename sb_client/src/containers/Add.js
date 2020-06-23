import { connect } from 'react-redux'
import Add from '../components/Add'
import { addListing } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        listings: state.listings
    }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
    return {
        addListing: (index) => dispatch(removeBusiness(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)