import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

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
        <ListItem key={expense.id}>
          <ListItemText
            primary={expense.name}
            secondary={`$${expense.amount.toFixed(2)}`}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => deleteExpense(expense.id)}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ExpenseList;
