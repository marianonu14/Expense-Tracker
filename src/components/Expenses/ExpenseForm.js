import { useState } from 'react'
import Card from '../UI/Card';
import './Expenses.css'

const ExpenseForm = (props) => {
    const [ newName, setNewName ] = useState('')
    const [ newAmount, setNewAmount ] = useState('')
    const [ newDate, setNewDate ] = useState('')

    const nameHandle = (e) => {
        setNewName(e.target.value)
    }
    const amountHandle = (e) => {
        setNewAmount(e.target.value)
    }
    const dateHandle = (e) => {
        setNewDate(e.target.value)
    }

    const newExpenseHandle = (e) => {
        e.preventDefault()
       
        const objectExpense = { 
            title: newName, 
            amount: newAmount, 
            date: new Date(newDate), 
            id:Math.random().toString()
         }
    
        props.addNewExpense(objectExpense);

        resetForm();
    }
    
    const resetForm = () => {
        setNewName('')
        setNewAmount('')
        setNewDate('')
    }
    
    return ( 
        <Card>
            <form className='expense-form' onSubmit={newExpenseHandle}>
                <label>Name:</label>
                <input type="text" value={newName} onChange={nameHandle}/>
                <label>Amount:</label>
                <input type="number" value={newAmount} onChange={amountHandle}/>
                <label>Date:</label>
                <input type="date" value={newDate} onChange={dateHandle} min="2022-01-01" max={"2022-12-31"}/>
                <button type='submit'>Send</button>
            </form>
        </Card>
     );
}
 
export default ExpenseForm;