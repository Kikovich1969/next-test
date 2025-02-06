'use client'
import { useState } from "react"
import { nanoid } from "nanoid"

const ExpenseInputForm = () => {
  const [expenses, setExpenses] = useState([{ id: nanoid(), amount: 0, currency: 'EUR' }])

  const handleExpenseChange = (event, index) => {
    const values = [...expenses]
    values[index].amount = event.target.value
    setExpenses(values)
  }

  const handleAddExpense = () => {
    setExpenses([...expenses, { id: nanoid(), amount: 0, currency: 'EUR' }])
  }

  const handleDeleteExpense = (id) => {
    /* let newExpenses = expenses.filter((expense) => expense.id != id)
    setExpenses(newExpenses) */
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id))
  }

  return (
    <section>
      {expenses.map((expense, index) => (
        <div key={expense.id} className="flex gap-2">
          <input
            type="number"
            onChange={(e) => handleExpenseChange(e, index)}
            value={expense.amount}
            className="border border-black"
          />
          <button onClick={handleAddExpense} className="border border-black p-1">+</button>
          {expenses.length > 1 && (
            <button
              onClick={() => handleDeleteExpense(expense.id)}
              className="border border-black p-1"
            >
              -
            </button>
          )}
        </div>
      ))}
    </section>
  )
}

export default ExpenseInputForm
