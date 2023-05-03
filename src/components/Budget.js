import React, { useContext ,useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch,budget, Currency } = useContext(AppContext);
    const setBudget = (val) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        });
    };
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {Currency}<input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => setBudget(event.target.value)}>
                        </input></span>
        </div>
    );
};
export default Budget;
