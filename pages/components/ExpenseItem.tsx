import React from 'react';

// Define types for the props
interface Expense {
  id: string;
  title: string;
  amount: number;
  category: string;
}

interface ExpenseItemProps {
  expense: Expense;
  deleteExpense: (id: string) => void;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense, deleteExpense }) => {
  return (
    <li>
      <span>{expense.title}</span> ${expense.amount} ({expense.category})
      {/* Added aria-label for better accessibility */}
      <button 
        onClick={() => deleteExpense(expense.id)} 
        aria-label={`Delete ${expense.title} expense`}
      >
        Delete
      </button>
    </li>
  );
};

export default ExpenseItem;
