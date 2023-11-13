import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const RemainingBudget = () => {
    const { expenses, budget } = useContext(AppContext);
    const {CurrencySign}   = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {CurrencySign} {budget - totalExpenses}</span>
        </div>
    );
};
export default RemainingBudget;