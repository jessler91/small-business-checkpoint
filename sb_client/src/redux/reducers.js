import { combineReducers } from 'redux'


// delete a listing, add a listing, login/logout, and fetch coordinates for your map given a certain address. 

const user = (state = [], action) => {
    switch(action.type) {
        case 'LOGIN':
            document.cookie = "loggedIn=true;max-age=60*1000"
            window.location.replace("/listings")
            console.log('loggedIn')
            return user


        case 'LOGOUT':
            // 
            // 
            // 

            return user
        default:
            return state
    }
}

const listings = (state = [], action) => {
    switch(action.type) {
        case 'ADD_LISTING':
            return [ ...state, action.value ];
        case 'REMOVE_BUSINESS':
            const listings = [ ...state ];
            listings.splice(action.value, 1);
      return listings;
        default:
            return state;
    }
}



const map = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_COORDINATES':
            return [ ...state, action.value ]
        default:
            return state;
    }
}

export default combineReducers({ user, listings, map })
