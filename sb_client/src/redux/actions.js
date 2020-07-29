export const setUser = (user) => {
    return {
        type: 'LOGIN',
        value: user
    }
}

export const logout = (user) => {
    return {
        type: 'LOGOUT',
        value: user
    }
}

export const addListing = (listing) => {
    return {
        type: 'ADD_LISTING',
        value: listing
    }
}

export const deleteListing = (index) => {
    return {
        type: 'REMOVE_BUSINESS',
        value: index
    }
}

export const fetchMaps = (url) => {
    return (dispatch) => {
        fetch(url)
            .then(res => res.json())
            .then(response => {
                const action = {
                    type: 'FETCH_COORDINATES',
                    value: response.Results
                }
                dispatch(action)
            })
    }
}