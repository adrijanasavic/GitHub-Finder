const githubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        case 'GET_USER':
            return {
                ...state,
                user: action.payload,
<<<<<<< HEAD
                loading: false,
            }
        case 'GET_REPOS':
            return {
                repos: action.payload,
                loading: false,
=======
                loading: false
>>>>>>> d9d86c3924a7387ed229ba31dc793d680c68b0e6
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true,
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: [],
            }

        default:
            return state;
    }
}

export default githubReducer;