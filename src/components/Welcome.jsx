import React, { useContext } from 'react'
import "./Welcome.scss"
import { GlobalContext } from '../context/GlobalContext'

function Wellcome() {
    const { page, setpage } = useContext(GlobalContext)
    if (page === 'Wellcome') {
        return (
            <div className="wrapper flex marginBottom">
                <h2>
                    Bienvenido a compuFacilito
                </h2>
                <div className="msjBox">
                    Te presentamos el servicio de creación de cotizaciones fácil, rápido y GRATIS!
                </div>
                <button className="btn gold marginTop fixed bottomCenter" onClick={() => setpage('InputData')}>Siguiente</button>
            </div>
        )
    }
    return <></>
}

export default Wellcome
