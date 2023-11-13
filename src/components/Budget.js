import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './ExpenseList';


const Budget = () => {
    const { budget } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const {CurrencySign}   = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        console.log(event.target.value);
            
if(newBudget <= totalExpenses) {
    alert('you can not reduce budget balance lower than the spending');
  
  };
    }
    
    return (
       
<div className='alert alert-secondary'>
<span>Budget: {CurrencySign} </span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );

};
export default Budget;


