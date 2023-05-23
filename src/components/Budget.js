import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, currency, dispatch, expenses } = useContext(AppContext);

    const submitEvent = (value) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        if(parseInt(value) > 20000) {
            alert("The value for the budget cannot exceed " + currency + "20000");
            dispatch({
                type: 'OVER_MAX_BUDGET',
                payload: null
            });
        }
        else if (parseInt(value) < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            dispatch({
                type: 'UNDER_SPENDING',
                payload: totalExpenses
            });
        }
        else {
            dispatch({
                type: 'SET_TOTAL_BUDGET',
                payload: value
            })
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £<input
                required='required'
                type='number'
                id='budget'
                step='10'
                value={budget}
                onChange={(event) => submitEvent(event.target.value)}>
            </input>
            </span>
        </div>
    );
};
export default Budget;
