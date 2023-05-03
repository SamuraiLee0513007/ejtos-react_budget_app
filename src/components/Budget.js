import React, { useContext ,useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, Currency } = useContext(AppContext);
    const {budget,setBudget} = useState('');
    
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
