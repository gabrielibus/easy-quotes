import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

function InputData() {
    const { page, setpage, userData, setuserData } = useContext(GlobalContext);
    const handleInput = (event)=> {
        const value = event.target.value
        const type = event.target.name
        setuserData(prevuserData=>({...prevuserData, [type]: value}))
    };

    if (page === 'InputData') {
        return (
            <div>
            InputData
            <input
                defaultValue={userData.name}
                name="name"
                type="text"
                placeholder="Nombre de la empresa"
                onChange={handleInput}    
            >
            </input>
            <input
                defaultValue={userData.nit}
                name="nit"
                type="number"
                placeholder="NIT"
                onChange={handleInput}    
            >
            </input>
            <input
                defaultValue={userData.address}
                name="address"
                type="text"
                placeholder="Dirección"
                onChange={handleInput}    
            >
            </input>
            <input
                defaultValue={userData.phone}
                name="phone"
                type="phone"
                placeholder="Teléfono"
                onChange={handleInput}    
            >
            </input>
            <input
                defaultValue={userData.email}
                name="email"
                type="email"
                placeholder="correo"
                onChange={handleInput}    
            >
            </input>
            <button onClick={()=>setpage('Wellcome')}>Atrás</button>
            <button onClick={()=>setpage('UploadPicture')}>Siguiente</button>
            
        </div>
            )
}
return <></>
}

export default InputData;
