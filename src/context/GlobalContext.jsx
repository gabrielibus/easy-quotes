import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [page, setpage] = useState(1)
    let value = {
        page: page ? page : 1,
        test: 'test',
        num: ' 7',
        setpage
    }
    console.log(page)
    return (
        <GlobalContext.Provider value={ value }>
            {children}
        </ GlobalContext.Provider>
        )
};
