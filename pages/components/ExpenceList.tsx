import React from 'react';
import { List, ListItem, ListItemText, Button, Box } from '@mui/material';

// Define the type for the expense
interface Expense {
  id: string;
  name: string;
  amount: number;
}

interface ExpenseListProps {
  expenses: Expense[];
  deleteExpense: (id: string) => void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, deleteExpense }) => {
  return (
    <List>
      {expenses.map((expense) => (
        <ListItem key={expense.id} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <ListItemText
            primary={expense.name}
            secondary={`$${expense.amount.toFixed(2)}`}
          />
          <Box>
            <Button
              variant="contained"
              color="error"  // Using color='error' for delete action
              onClick={() => deleteExpense(expense.id)}
            >
              Delete
            </Button>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default ExpenseList;
