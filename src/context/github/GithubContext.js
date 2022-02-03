<<<<<<< HEAD
import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';
=======
import { createContext, useState } from 'react';
>>>>>>> 4c4e0779b9ddbd66d975c538589b13e0e56de9ed

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
<<<<<<< HEAD
    const initialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState);

    // Get initial users (testing purposes)
    const fetchUsers = async () => {
        setLoading();
=======
        const [users, setUsers] = useState([]);
        const [loading, setLoading] = useState(true);

        const fetchUsers = async() => {
>>>>>>> 4c4e0779b9ddbd66d975c538589b13e0e56de9ed
            const response = await fetch(`${GITHUB_URL}/users`, {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`
                }
            })

            const data = await response.json();

<<<<<<< HEAD
            dispatch({
                type: 'GET_USERS',
                payload: data,
            })
    }
    // Set loading
    const setLoading = () => dispatch({
        type: 'SET_LOADING'
    })

    return <GithubContext.Provider
        value={{
        users: state.users,
        loading: state.loading,
=======
            setUsers(data);
            setLoading(false);
        }

    return <GithubContext.Provider
        value={{
        users,
        loading,
>>>>>>> 4c4e0779b9ddbd66d975c538589b13e0e56de9ed
        fetchUsers,
    }}>
        {children}
    </GithubContext.Provider> 
}

export default GithubContext;