import { connect } from 'react-redux'
import BusinessListings from '../components/BusinessListings'
import { removeBusiness } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        listings: state.listings,
    }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
    return {
        removeBusiness: (index) => dispatch(removeBusiness(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessListings)