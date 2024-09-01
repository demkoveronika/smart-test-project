import { User } from "../types/User"

type Props = {
  users: User[]
};

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

interface Column {
  id: 'name' | 'username' | 'email' | 'phone';
  label: string;
  minWidth?: number;
  backgroundColor: string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170, backgroundColor: '#e0e0e0' },
  { id: 'username', label: 'Username', minWidth: 170, backgroundColor: '#e0e0e0' },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
    backgroundColor: '#e0e0e0'
  },
  {
    id: 'phone',
    label: 'Phone',
    minWidth: 170,
    backgroundColor: '#e0e0e0'
  },
];

export const UserTable: React.FC<Props> = ({ users }) => {
  return (
    <>
      <Table stickyHeader aria-label="sticky table" style={{border: '1px solid #000'}}>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                style={{ minWidth: column.minWidth, backgroundColor: column.backgroundColor, fontWeight: 'bold'}}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
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
                    );
                  })}
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </>
  )
}