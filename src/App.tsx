import { useEffect, useState } from 'react';
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { User } from './types/User';
import { getUsers } from './api';
import { setUsers } from './features/users';
import { UserTable } from './components/UserTable';

const App = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(state => state.users);
  const filters = useAppSelector(state => state.filters);

  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

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
    console.log(filtered)
  }, [users, filters])


  return (
    <>
      <UserTable users={filteredUsers} />
    </>
  )
}

export default App
