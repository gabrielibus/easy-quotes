import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

function StepCounter() {
    const { pageNumber } = useContext(GlobalContext);
    return (
        <div className="paddingH">
            step: {pageNumber} / n
        </div>
    )
}

export default StepCounter;
