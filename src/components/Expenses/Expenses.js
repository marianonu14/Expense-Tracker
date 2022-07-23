import ExpensesItem from './ExpensesItem';
import Card from '../UI/Card';

const Expenses = ({items}) => {
    return ( 
        <Card>
            {items.map(elem => <ExpensesItem
            key={elem.id}
            title={elem.title}
            amount={elem.amount}
            date={elem.date} />)}
        </Card>  
     );
}
 
export default Expenses;