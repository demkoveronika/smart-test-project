import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useAppSelector } from "../app/hooks";
import { UserFilter } from "./UserFilter";
import { UserError } from './UserError';
import { User } from "../types/User"
import { columns } from '../types/Columns';

type Props = {
  users: User[],
};

export const UserTable: React.FC<Props> = ({ users }) => {
  const filters = useAppSelector(state => state.filters);

  return (
    <Table stickyHeader aria-label="sticky table">
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell
              key={column.id}
              style={{ 
                minWidth: column.minWidth, 
                backgroundColor: column.backgroundColor, 
                fontWeight: 'bold', 
                fontSize: '18px',
                padding: '10px'
              }}
            >
              {column.label}
              <br />
              <UserFilter query={filters[column.id]} filtersKey={column.id} />
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
        {users.length > 0 ? (
          <TableBody>
            {users
              .map((user) => {
                return (
                  <TableRow key={user.id}>
                    {columns.map((column) => {
                      const value = user[column.id];
                      return (
                        <TableCell key={column.id}>
                          {value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })
            }
          </TableBody>
        ) : <UserError />}
    </Table>
  );
};