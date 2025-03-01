import { useState } from 'react';
import ExpenseForm from "@/pages/components/ExpenseForm"; // Corrected spelling if needed
import ExpenseList from "@/pages/components/ExpenceList" // Corrected spelling

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
      <ExpenseForm addExpense={addExpense} /> {/* Make sure this is correctly passing props */}
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} /> {/* Make sure this is correctly passing props */}
      <div className="total-amount">
        <h3>Total Expenses: ${totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
}
