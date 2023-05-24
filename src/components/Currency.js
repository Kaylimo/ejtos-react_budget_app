import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {

    const { dispatch } = useContext(AppContext);

    const submitEvent = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value
        });
    }

    return (
        <div className={'alert'}>
            <select id="currencySelect" style={{ backgroundColor: 'palegreen' }} onChange={(event) => submitEvent(event.target.value)}>
                <option value="$" name="dollar">$ Dollar</option>
                <option value="£" name="pound">£ Pound</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default Currency;