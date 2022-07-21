import './Expenses.css'
import ExpensesDate from './ExpensesDate';

const ExpensesItem = (props) => {
    return ( 
    <div className="expenses-container">
        <ExpensesDate date={props.date} />
        <p>{props.title}</p>
        <p>$ {props.amount}</p>
    </div>
     );
}
 
export default ExpensesItem;