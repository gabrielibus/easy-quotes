import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [page, setpage] = useState('Welcome');
    const [userData, setuserData] = useState({});
    const [userPicture, setuserPicture] = useState();

    const pageNumber = () => {
        switch (page) {
            case 'Welcome': return 0
            case 'InputData': return 1
            case 'UploadPicture': return 2
            case 'Summary': return 3
            default: return 0
        }
    };

    let value = {
        page: page,
        pageNumber: pageNumber(),
        setpage,
        userData,
        setuserData,
        userPicture,
        setuserPicture,
    }
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </ GlobalContext.Provider>
    )
};
