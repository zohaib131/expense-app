import { useState } from 'react';
import ExpenseForm from "@/pages/components/ExpenseForm";
import ExpenseList from "@/pages/components/ExpenceList";

// Define types for the expense data
interface Expense {
  id: string;
  name: string;
  amount: number;
}

export default function Home() {
  // Use the Expense type for the expenses state
  const [expenses, setExpenses] = useState<Expense[]>([]);

  // Define the addExpense function type
  const addExpense = (expense: Expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  // Define the deleteExpense function type
  const deleteExpense = (id: string) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  // Calculate the total amount
  const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      <div className="total-amount">
        <h3>Total Expenses: ${totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
}
