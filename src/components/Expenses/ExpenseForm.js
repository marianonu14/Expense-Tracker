import React, { useState } from 'react'
import Card from '../UI/Card';
import './Expenses.css'

const ExpenseForm = () => {
    const [ newName, setNewName ] = useState('')
    const [ newAmount, setNerAmount ] = useState('')
    const [ newDate, setNewDate ] = useState('')
    const [ newExpense, setNewExpense ] = useState('')

    const nameHandle = (e) => {
        setNewName(e.target.value)
    }
    const amountHandle = (e) => {
        setNerAmount(e.target.value)
    }
    const dateHandle = (e) => {
        setNewDate(e.target.value)
    }

    const newExpenseHandle = (e) => {
        e.preventDefault()
       
        const objectExpense = { title: newName, amount: newAmount, date: new Date(newDate) }
    
        setNewExpense(objectExpense);
    } 
    
    return ( 
        <Card>
            <form className='expense-form' onSubmit={newExpenseHandle}>
                <label>Name:</label>
                <input type="text" onChange={nameHandle}/>
                <label>Amount:</label>
                <input type="number" onChange={amountHandle}/>
                <label>Date:</label>
                <input type="date" onChange={dateHandle} min="2022-01-01" max={"2022-12-31"}/>
                <button type='submit'>Send</button>
            </form>
        </Card>
     );
}
 
export default ExpenseForm;