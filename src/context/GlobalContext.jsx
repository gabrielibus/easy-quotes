import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [page, setpage] = useState('UploadPicture');
    const [userData, setuserData] = useState({});
    const [userPicture, setuserPicture] = useState();
    
    const pageNumber = ()=>{
        switch (page) {
            case 'Wellcome':
                return 1
            case 'InputData':
                return 2
                case 'UploadPicture':
                return 3
            default:
                return 
        }
    };

    let value = {
        page: page,
        pageNumber: pageNumber(),
        setpage,
        userData,
        setuserData,
        setuserPicture
    }
    console.log(userPicture)
    return (
        <GlobalContext.Provider value={ value }>
            {children}
        </ GlobalContext.Provider>
        )
};
