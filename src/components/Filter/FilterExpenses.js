import Card from "../UI/Card";
import './FilterExpenses.css'

const FilterExpenses = ({expenses, onFilterExpenses}) => {
    const filterHandle = event => {
        const yearFilter = Number(event.target.value) 
        const expensesFilter = expenses.filter(elem => elem.date.getFullYear() === yearFilter)
        onFilterExpenses(expensesFilter)
    }

    return ( 
        <Card>
            <label className="label-filter">Filter a Year</label>
            <select name="years" onChange={filterHandle}>
                <option>-- Choose a Year --</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </Card>
     );
}
 
export default FilterExpenses;