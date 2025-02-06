'use client'
import { useState } from "react"
import { nanoid } from "nanoid"

const ExpenseInputForm = () => {
  const [expenses, setExpenses] = useState([{ id: nanoid(), amount: 0, curreny: 'EUR' }])

  const handleExpenseChange = (event, index) => {
    const values = [...expenses]
    values[index].amount = event.target.value
    setExpenses(values)
  }

  const handleAddExpense = () => {
    setExpenses([...expenses, { id: nanoid(), amount: 0, curreny: 'EUR' }])
  }

  const handleDeleteExpense = (id) => {
    let newExpenses = expenses.filter((expense) => expense.id != id)
    setExpenses(newExpenses)
  }

  return (
    expenses.map((expense, index) => (
      <div key={expense.id}>
        <input type="number" onChange={(e) => handleExpenseChange(e, index)} value={expense.amount} className="border border-black" />
        <button onClick={handleAddExpense}>+</button>
        <button onClick={() => handleDeleteExpense(expense.id)}>-</button>
      </div>
    ))
  )
}

export default ExpenseInputForm