import { useEffect, useState } from 'react';

function UserResults() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            // headers: {
            //     Autorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            // }
        })

        const data = await response.json();

        setUsers(data);
    }
        return <div>User results</div>

    
}
export default UserResults