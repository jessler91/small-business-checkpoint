import { connect } from 'react-redux'
import BusinessListings from '../components/BusinessListings'
import { deleteListing } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        listings: state.listings,
    }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
    return {
        deleteListing: (index) => dispatch(deleteListing(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessListings)