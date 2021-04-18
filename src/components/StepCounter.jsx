import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

function StepCounter() {
    const { page } = useContext(GlobalContext);
    return (
        <div>
            step: {page} / n
        </div>
    )
}

export default StepCounter;
