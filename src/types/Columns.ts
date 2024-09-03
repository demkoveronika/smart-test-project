export interface Column {
  id: 'name' | 'username' | 'email' | 'phone';
  label: string;
  minWidth?: number;
  backgroundColor: string;
}

export const columns: readonly Column[] = [
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