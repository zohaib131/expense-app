import { useState } from 'react';
import ExpenseForm from "@/pages/components/ExpenseForm";
import ExpenseList from "@/pages/components/ExpenceList";
import { Expense } from "@/pages/types/Expense";

const Home = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [nextId, setNextId] = useState(1);

  const addExpense = (expense: { description: string; amount: number }) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      {
        id: nextId,
        description: expense.description,
        amount: expense.amount,
        date: new Date().toISOString(),
      },
    ]);
    setNextId((prevId) => prevId + 1);
  };

  const deleteExpense = (id: number) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
    </div>
  );
};

export default Home;
