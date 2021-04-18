import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

function InputData() {
    const { page, setpage } = useContext(GlobalContext);

    if (page === 2) {
        return (
            <div>
            InputData
            <input
                type="text"
                placeholder="Nombre de la empresa"
                >
            </input>
            <input
                type="number"
                placeholder="NIT"
                >
            </input>
            <input
                type="text"
                placeholder="Dirección"
                >
            </input>
            <input
                type="phone"
                placeholder="Teléfono"
                >
            </input>
            <input
                type="email"
                placeholder="correo"
                >
            </input>
            <button onClick={()=>setpage(prevState=>--prevState)}>Atrás</button>
            <button disabled onClick={()=>setpage(prevState=>++prevState)}>Siguiente</button>
            
        </div>
            )
}
return <></>
}

export default InputData;
