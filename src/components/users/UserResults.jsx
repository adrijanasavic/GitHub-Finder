<<<<<<< HEAD
import { useContext } from 'react';
=======
import { useEffect, useContext } from 'react';
>>>>>>> 4c4e0779b9ddbd66d975c538589b13e0e56de9ed
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';

function UserResults() {
<<<<<<< HEAD
    const { users, loading } = useContext(GithubContext);
=======
    const {users,loading,fetchUsers} = useContext(GithubContext);

    useEffect(() => {
        fetchUsers();
    }, []);
>>>>>>> 4c4e0779b9ddbd66d975c538589b13e0e56de9ed

    if (!loading) {

        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users.map((user) => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    } else {
        return <Spinner />
    }
}
export default UserResults