import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext';

function StepCounter() {
    const { pageNumber } = useContext(GlobalContext);
    if (pageNumber >= 1 && pageNumber < 3) {

        return (
            <div className="flex paddingH marginTop fontSmall">
                paso: {pageNumber} / 2
            </div>
        )
    } return <></>
}

export default StepCounter;
