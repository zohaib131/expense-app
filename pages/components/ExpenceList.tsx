import { Expense } from '../types/Expense';

interface ExpenseListProps {
  expenses: Expense[];
  onDeleteExpense: (id: number) => void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, onDeleteExpense }) => {
  return (
    <div>
      <h3>Expense List</h3>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.description}: ${expense.amount.toFixed(2)}{' '}
            <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
