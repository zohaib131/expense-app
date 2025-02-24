import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

// Define the type for the expense
interface ExpenseFormProps {
  addExpense: (expense: { id: string; name: string; amount: number }) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ addExpense }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState<number | string>('');
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name && amount) {
      const newExpense = {
        id: Math.random().toString(36).substr(2, 9), // generate unique id
        name,
        amount: Number(amount),
      };
      addExpense(newExpense);
      setName('');
      setAmount('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ marginBottom: 2 }}>
      <TextField
        label="Expense Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        required
        sx={{ marginBottom: 1 }}
      />
      <TextField
        label="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        fullWidth
        required
        type="number"
        sx={{ marginBottom: 1 }}
      />
      <Button variant="contained" color="primary" type="submit">
        Add Expense
      </Button>
    </Box>
  );
};

export default ExpenseForm;
