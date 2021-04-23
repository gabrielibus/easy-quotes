import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

function Wellcome() {
    const { page, setpage } = useContext(GlobalContext)
    if (page === 'Welcome') {
        return (
            <div className="wrapper flex marginBottom paddingH">
                <h2 className="marginBottom textCenter">
                    Bienvenido a compuFacilito
                </h2>
                <div className="msjBox textCenter">
                    Te presentamos el servicio de creación de cotizaciones fácil, rápido y GRATIS!
                </div>
                <button className="btn gold marginTop fixed bottomCenter" onClick={() => setpage('InputData')}>Siguiente</button>
            </div>
        )
    }
    return <></>
}

export default Wellcome
