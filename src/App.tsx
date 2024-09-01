import { useEffect } from 'react';
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { User } from './types/User';
import { getUsers } from './api';
import { setUsers } from './features/users';
import { UserTable } from './components/UserTable';

const App = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(state => state.users);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers: User[] = await getUsers();
        console.log('Fetched Users:', fetchedUsers);

        dispatch(setUsers(fetchedUsers))
      } catch {
        throw new Error('Failed to fetch users');
      }
    }

    fetchUsers();
  }, [dispatch])

  return (
    <>
      <UserTable users={users}/>
    </>
  )
}

export default App
