import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext';

function InputData() {
    const { page, setpage, userData, setuserData } = useContext(GlobalContext);
    const handleInput = (event) => {
        const value = event.target.value
        const type = event.target.name
        setuserData(prevuserData => ({ ...prevuserData, [type]: value }))
    };

    if (page === 'InputData') {
        return (
            <div className="wrapper flex marginBottom paddingH">
                <h2 className='textCenter marginBottom'>
                    Ingresa tus datos para la cotización
            </h2>
                <input
                    className="input marginBottom"
                    defaultValue={userData.name}
                    name="name"
                    type="text"
                    placeholder="Nombre de la empresa"
                    onChange={handleInput}
                >
                </input>
                <input
                    className="input marginBottom"
                    defaultValue={userData.nit}
                    name="nit"
                    type="number"
                    placeholder="NIT"
                    onChange={handleInput}
                >
                </input>
                <input
                    className="input marginBottom"
                    defaultValue={userData.address}
                    name="address"
                    type="text"
                    placeholder="Dirección"
                    onChange={handleInput}
                >
                </input>
                <input
                    className="input marginBottom"
                    defaultValue={userData.phone}
                    name="phone"
                    type="phone"
                    placeholder="Teléfono"
                    onChange={handleInput}
                >
                </input>
                <input
                    className="input marginBottom"
                    defaultValue={userData.email}
                    name="email"
                    type="email"
                    placeholder="correo"
                    onChange={handleInput}
                >
                </input>
                <button className="btn gold fixed bottomLeft" onClick={() => setpage('Wellcome')}>Atrás</button>
                <button className="btn gold fixed bottomRight" onClick={() => setpage('UploadPicture')}>Siguiente</button>
            </div>
        )
    }
    return <></>
}

export default InputData;
