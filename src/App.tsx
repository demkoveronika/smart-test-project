import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';

import { getUsers } from './api';
import { setUsers } from './features/users';

import { User } from './types/User';
import { UserTable } from './components/UserTable';
import { Loader } from './components/Loader';

import './App.css';

const App = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(state => state.users);
  const filters = useAppSelector(state => state.filters);

  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const fetchedUsers: User[] = await getUsers();
        dispatch(setUsers(fetchedUsers))
      } catch {
        throw new Error('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, [dispatch]);

  useEffect(() => {
    const filtered = users.filter(user =>
      Object.keys(filters).every(key => 
        user[key as keyof User]
          .toString()
          .toLowerCase()
          .includes(filters[key as keyof typeof filters].toLowerCase().trim())
      )
    )
  
    setFilteredUsers(filtered);
  }, [users, filters])


  return (
    <>
      {loading ? <Loader /> : (
        <UserTable users={filteredUsers} />
      )}
    </>
  )
}

export default App;
